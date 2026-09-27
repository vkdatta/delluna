export const name="person_2-fill";
export const id="dl_de4c593cd27413cc9174";
export const url=new URL("../icons/person_2-fill.svg?v=47998ffa3bf7048389b0760dbeb447db39b1c077b23da128c3e916e5bc2be2ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
