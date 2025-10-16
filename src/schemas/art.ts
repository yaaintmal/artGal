import { z } from "zod";

// export interface ArtworkItem {
//   id: number;
//   title: string;
//   artist_display: string;
//   description: string | null;
//   api_link: string;
//   date_display: string;
//   medium_display: string;
//   image_id: string | null; // Necessary for constructing the image URL
//   thumbnail: {
//     lqip: string;
//     alt_text: string;
//   } | null;
// }

// export interface ArticApiResponse {
//   data: ArtworkItem[];
//   pagination: {
//     next_url: string;
//   };
// }

//! refac the last one: zod

const ThumbnailSchema = z.object({
  lqip: z.string(),
  alt_text: z.string(),
});

// defining structure of single ArtworkItem
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
