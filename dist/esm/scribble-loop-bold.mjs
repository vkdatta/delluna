export const name="scribble-loop-bold";
export const id="dl_2591ab646d5aab23e054";
export const url=new URL("../icons/scribble-loop-bold.svg?v=57a47a7660a25379081527548e34a6751c9a1f7e5d8004f4b9ab64c1b4d10b45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
