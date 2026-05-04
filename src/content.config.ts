import { defineCollection} from 'astro:content';
import { z } from "astro/zod";
import { glob } from 'astro/loaders';

const projectColletion = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
    schema: ({ image })=> z.object({
        title: z.string(),
        description: z.string(),
        category: z.string(),
        mainImage: image().optional(),
        technologies: z.array(
            z.object({
                name: z.string(),
                icon: image(),
            })
        ).optional(),
        githubLink: z.string().optional(),
        liveUrl: z.string().optional(),
    })
});

export const collections = {
    projects: projectColletion,
};
