import React, { useEffect, useState } from 'react';
import { Calendar, ArrowLeft, ArrowRight, Rss } from 'lucide-react';
import { motion } from 'motion/react';
import { blogPosts, BlogPost } from '../content/blogPosts';

function useHashSlug(): string | null {
  const readSlug = () => {
    const hash = window.location.hash.replace('#', '');
    return hash.startsWith('blog/') ? decodeURIComponent(hash.slice(5)) : null;
  };

  const [slug, setSlug] = useState<string | null>(readSlug);

  useEffect(() => {
    const onHashChange = () => setSlug(readSlug());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return slug;
}

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

const PostCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <motion.a
    href={`#blog/${post.slug}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="group flex flex-col rounded-3xl overflow-hidden bg-white border border-slate-200 hover:border-pmg-tizza/40 hover:shadow-xl transition-all duration-300"
  >
    <div className="relative aspect-[16/9] overflow-hidden bg-pmg-navy">
      {post.coverImage ? (
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center tech-gradient">
          <Rss className="text-white/20" size={40} />
        </div>
      )}
      <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider text-white bg-pmg-navy/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/15">
        {post.category}
      </span>
    </div>
    <div className="p-6 flex-1 flex flex-col">
      <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-2">
        <Calendar size={12} /> {formatDate(post.date)}
      </span>
      <h3 className="text-lg font-bold text-pmg-dark group-hover:text-pmg-tizza transition-colors mb-2 leading-snug">
        {post.title}
      </h3>
      <p className="text-sm text-slate-600 font-light leading-relaxed flex-1">{post.excerpt}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-pmg-tizza">
        Ler artigo <ArrowRight size={13} />
      </span>
    </div>
  </motion.a>
);

const BlogList: React.FC = () => {
  const sorted = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <section id="blog" className="py-20 sm:py-28 bg-slate-50 text-pmg-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 max-w-2xl">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-pmg-tizza/10 border border-pmg-tizza/20 text-xs font-semibold text-pmg-tizza uppercase tracking-wider mb-4">
            <Rss size={13} />
            <span>Blog Tizza Tecnologia</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-pmg-navy tracking-tight">
            Conteúdo técnico de <span className="text-pmg-tizza">tecnologia e automação</span>.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-light mt-3 leading-relaxed">
            Novidades da plataforma, bastidores do desenvolvimento e conteúdo técnico sobre dados,
            automação e integração — direto de quem constrói o Kaiaki e os demais módulos.
          </p>
        </div>

        {sorted.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white/60 p-12 text-center">
            <Rss className="mx-auto mb-4 text-slate-300" size={36} />
            <h3 className="text-lg font-bold text-pmg-navy mb-1">Em breve, novidades técnicas por aqui.</h3>
            <p className="text-sm text-slate-500 font-light max-w-md mx-auto">
              Estamos preparando os primeiros artigos. Volte em breve ou fale com nossa equipe técnica.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sorted.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const BlogPostView: React.FC<{ post: BlogPost }> = ({ post }) => (
  <section className="py-20 sm:py-28 bg-slate-50 text-pmg-dark">
    <div className="max-w-3xl mx-auto px-6">
      <a
        href="#blog"
        className="inline-flex items-center gap-1.5 text-xs font-bold text-pmg-tizza mb-8 hover:underline"
      >
        <ArrowLeft size={14} /> Voltar para o blog
      </a>

      <span className="text-xs font-bold text-pmg-tizza uppercase tracking-widest block mb-3">
        {post.category}
      </span>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-pmg-navy tracking-tight mb-3 leading-tight">
        {post.title}
      </h1>
      <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-10">
        <Calendar size={12} /> {formatDate(post.date)}
      </span>

      {post.coverImage && (
        <div className="rounded-3xl overflow-hidden mb-10 aspect-[16/9] bg-pmg-navy">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      )}

      <div className="flex flex-col gap-5">
        {post.body.map((paragraph, idx) => (
          <p key={idx} className="text-base text-slate-700 font-light leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  </section>
);

export const Blog: React.FC = () => {
  const slug = useHashSlug();
  const post = slug ? blogPosts.find((p) => p.slug === slug) ?? null : null;

  if (slug && post) return <BlogPostView post={post} />;
  return <BlogList />;
};
