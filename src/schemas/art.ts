import { z } from "zod";

const ThumbnailSchema = z.object({
  lqip: z.string(),
  alt_text: z.string(),
});

// defining structure of single ArtworkItem with zod
export const ArtworkItemSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  artist_display: z.string(),
  description: z.string().nullable(),
  api_link: z.string().url(),
  date_display: z.string(),
  medium_display: z.string(),
  image_id: z.string().nullable(),
  thumbnail: ThumbnailSchema.nullable(),
});

const PaginationSchema = z.object({
  next_url: z.string().url(),
});

export const ArticApiResponseSchema = z.object({
  data: z.array(ArtworkItemSchema),
  pagination: PaginationSchema,
});

export type ArtworkItem = z.infer<typeof ArtworkItemSchema>;
export type ArticApiResponse = z.infer<typeof ArticApiResponseSchema>;
