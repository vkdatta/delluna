export const name="film-slate-light";
export const id="dl_c591e94a63c540cca290";
export const url=new URL("../icons/film-slate-light.svg?v=ce9b283801164db115fcc223b4c1c90ea03580d430832ab75db27be5acacb7c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
