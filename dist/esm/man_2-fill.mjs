export const name="man_2-fill";
export const id="dl_44cb261c655262f10e2e";
export const url=new URL("../icons/man_2-fill.svg?v=7567dc9b33412d223447d0754aecb70ab4a77ad0d059d8e1139f6602296e22f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
