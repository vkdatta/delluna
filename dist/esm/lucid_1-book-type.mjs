export const name="lucid_1-book-type";
export const id="dl_a03602bf3da34d01be0d";
export const url=new URL("../icons/lucid_1-book-type.svg?v=c07408abafd3f248b5d2cb13e5783e4f08f098a58fa7151f21fb4090eaa2a7cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
