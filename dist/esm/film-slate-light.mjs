export const name="film-slate-light";
export const id="dl_c591e94a63c540cca290";
export const url=new URL("../icons/film-slate-light.svg?v=c02ea6a12f1d6b6be6bf65c7543f646181cd6c5594e20ecd96f9445daf472f44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
