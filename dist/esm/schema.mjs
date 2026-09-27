export const name="schema";
export const id="dl_afdd18bc60602b8092b3";
export const url=new URL("../icons/schema.svg?v=35a395d0ddba5beed38687bdbf49afd53349f61e99bdde54ce4d18a81ff14e7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
