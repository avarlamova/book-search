export interface ServerResponse {
  numFound: number;
  start: number;
  numFoundExact: boolean;
  docs: IBook[];
  num_found: number;
  q: string;
  offset: any;
}

export interface IBook {
  key?: string;
  type?: string;
  seed?: string[];
  title: string;
  title_suggest?: string;
  edition_count?: number;
  edition_key?: string[];
  publish_date?: string[];
  publish_year?: number[];
  first_publish_year?: number;
  publisher?: string[];
  lcc?: string[];
  ddc?: string[];
  isbn?: string[];
  has_fulltext?: boolean;
  cover_edition_key?: string;
  cover_i?: number;
  first_sentence?: string[];
  language?: string[];
  author_key?: string[];
  author_name?: string[];
  author_alternative_name?: string[];
  person?: string[];
  place?: string[];
  subject?: string[];
  id_amazon?: string[];
  id_dnb?: string[];
  id_goodreads?: string[];
  id_google?: string[];
  person_key?: string[];
  place_key?: string[];
  person_facet?: string[];
  subject_facet?: string[];
  lcc_sort?: string;
  author_facet?: string[];
  subject_key?: string[];
  ddc_sort?: string;
  id_better_world_books?: string[];
  id_alibris_id?: string[];
  id_paperback_swap?: string[];
  id_overdrive?: string[];
  subtitle?: string;
  time?: string[];
  time_facet?: string[];
  time_key?: string[];
}
