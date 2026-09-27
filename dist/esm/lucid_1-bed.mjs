export const name="lucid_1-bed";
export const id="dl_f336cc0b84144c529b3e";
export const url=new URL("../icons/lucid_1-bed.svg?v=41587a94fa360d65b49494dabdb4eb1efc81e1aae467871f031bc1a3cb8a5fd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
