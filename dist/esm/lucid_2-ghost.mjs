export const name="lucid_2-ghost";
export const id="dl_d3a9e1ac346b4854a830";
export const url=new URL("../icons/lucid_2-ghost.svg?v=17d6557328c273277c44c68d34faaf95824bbe5b33f04913bb846f0e9d3733ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
