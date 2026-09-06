export const name="film-slate-bold";
export const id="dl_9d4c1480eb1e46969d3d";
export const url=new URL("../icons/film-slate-bold.svg?v=b61683707f518cb825c158e3ea703887e6a787e40fa79f3cbdae1c7409a95287",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
