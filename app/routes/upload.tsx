import type { Route } from "./+types/upload";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Upload Resume | Resumind" },
    { name: "description", content: "Upload your resume for AI-powered feedback" },
  ];
}

export default function Upload() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <section className="main-section">
        <div className="page-heading">
          <h1>Upload Resume</h1>
          <h2>Drop your resume and get AI-powered feedback</h2>
        </div>
      </section>
    </main>
  );
}