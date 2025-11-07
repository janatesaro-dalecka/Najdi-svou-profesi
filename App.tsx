
import React, { useState, useMemo } from 'react';
import { skills, professions } from './data';
import { Skill, ProfessionResult } from './types';

const MAX_SKILLS = 5;

const getSkillMatchText = (count: number) => {
  if (count === 1) return '1 shodná dovednost';
  if (count >= 2 && count <= 4) return `${count} shodné dovednosti`;
  return `${count} shodných dovedností`;
};

const App: React.FC = () => {
  const [selectedSkills, setSelectedSkills] = useState<Skill[]>([]);
  const [results, setResults] = useState<ProfessionResult[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);

  const handleSkillToggle = (skill: Skill) => {
    setShowResults(false);
    setSelectedSkills(prev => {
      if (prev.includes(skill)) {
        return prev.filter(s => s !== skill);
      }
      if (prev.length < MAX_SKILLS) {
        return [...prev, skill];
      }
      return prev;
    });
  };

  const handleFindProfession = () => {
    const calculatedResults: ProfessionResult[] = professions.map(profession => {
      const matchCount = profession.skills.filter(skill => selectedSkills.includes(skill)).length;
      return { profession, matchCount };
    });

    const maxMatchCount = Math.max(...calculatedResults.map(r => r.matchCount));
    
    if (maxMatchCount === 0) {
        setResults([]);
    } else {
        const bestMatches = calculatedResults
          .filter(r => r.matchCount === maxMatchCount)
          .sort((a, b) => a.profession.name.localeCompare(b.profession.name));
        setResults(bestMatches);
    }

    setShowResults(true);
  };

  const handleReset = () => {
    setSelectedSkills([]);
    setResults([]);
    setShowResults(false);
  };

  const remainingSkills = useMemo(() => MAX_SKILLS - selectedSkills.length, [selectedSkills]);

  return (
    <div className="min-h-screen font-sans text-slate-800 antialiased">
      <main className="container mx-auto max-w-4xl p-4 sm:p-6 lg:p-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            Najdi svou profesi
          </h1>
          <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto">
            Vyberte si {MAX_SKILLS} dovedností, které vás nejlépe vystihují, a my vám navrhneme profesi, která odpovídá vašim talentům.
          </p>
        </header>

        {showResults && (
          <div className="mb-10 bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-200 animate-fade-in">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
              {results.length > 1 ? 'Vaše ideální profese' : 'Vaše ideální profese'}
            </h2>
            {results.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map(({ profession, matchCount }) => (
                  <div key={profession.name} className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="mb-4 flex justify-center items-center">
                      <profession.icon className="h-36 w-36 text-sky-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{profession.name}</h3>
                    <p className="text-slate-500 mt-1">
                      {getSkillMatchText(matchCount)}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-slate-600">
                Pro vybrané dovednosti nebyly nalezeny žádné odpovídající profese. Zkuste jinou kombinaci.
              </p>
            )}
            <div className="mt-8 flex justify-center">
              <button
                onClick={handleReset}
                className="w-full sm:w-auto text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 ease-in-out bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
              >
                Nový výběr
              </button>
            </div>
          </div>
        )}

        <div className={`bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-200 transition-opacity duration-300 ${showResults ? 'opacity-50 pointer-events-none' : ''}`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-slate-800">Vyberte svých 5 dovedností</h2>
            <div 
              className={`text-sm font-semibold py-1 px-3 rounded-full transition-colors ${
                remainingSkills > 0 ? 'bg-sky-100 text-sky-700' : 'bg-amber-100 text-amber-700'
              }`}
            >
              {remainingSkills > 0 ? `Zbývá ${remainingSkills}` : 'Všechny dovednosti vybrány'}
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mb-6">
            {skills.map(skill => {
              const isSelected = selectedSkills.includes(skill);
              const isDisabled = !isSelected && selectedSkills.length >= MAX_SKILLS;
              return (
                <button
                  key={skill}
                  onClick={() => handleSkillToggle(skill)}
                  disabled={isDisabled}
                  className={`
                    px-4 py-2 text-sm font-medium rounded-full border-2 transition-all duration-200 ease-in-out
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500
                    ${isSelected 
                      ? 'bg-sky-500 border-sky-500 text-white shadow-md' 
                      : 'bg-white border-slate-300 text-slate-700 hover:border-sky-400 hover:text-sky-600'
                    }
                    ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}
                  `}
                >
                  {skill}
                </button>
              );
            })}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              onClick={handleFindProfession}
              disabled={selectedSkills.length !== MAX_SKILLS}
              className="w-full sm:w-auto flex-grow text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed bg-sky-600 hover:bg-sky-700 disabled:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            >
              Doporuč profesi
            </button>
            <button
              onClick={handleReset}
              className="w-full sm:w-auto text-slate-700 font-bold py-3 px-6 rounded-lg transition-colors duration-200 bg-slate-200 hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400"
            >
              Obnovit
            </button>
          </div>
        </div>

      </main>
    </div>
  );
};

export default App;
