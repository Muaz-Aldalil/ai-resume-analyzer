import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "../../constants";
import ResumeCard from "~/components/ResumeCard";
import { usePuterStore } from "~/lib/puter";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
  const { auth } = usePuterStore();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.isAuthenticated) navigate(`/auth?next=${location.pathname}`);
  }, [auth.isAuthenticated]);

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading">
          <h1>Track your Application & Resume Rating</h1>
          <h2>Review Your submissions and Check AI-powered feedback</h2>
        </div>

        {resumes.length > 0 ? (
          <div className="resumes-section">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 py-10">No resumes yet.</p>
        )}
      </section>
    </main>
  );
}