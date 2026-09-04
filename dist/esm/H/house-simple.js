export const name="house-simple";
export const id="dl_54a99d021aa34518820f";
export const url=new URL("../../icons/H/house-simple.svg?v=7e6ffd7ac040c9ddc6bb39080c0627bf58b1974a60466fc8f9ade5004186aa1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
