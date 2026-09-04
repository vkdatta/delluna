export const name="books";
export const id="dl_bf57ce3847844f80b818";
export const url=new URL("../../icons/B/books.svg?v=38560cd9dec996bc3f79c10675ced1d2b3bd2e5ef497f3966733e5d787af5e11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
