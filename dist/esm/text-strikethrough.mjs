export const name="text-strikethrough";
export const id="dl_01dbc3f2fb83372cf7d2";
export const url=new URL("../icons/text-strikethrough.svg?v=98f9b1dd760db433006aedebab65b320b7a5ed0f215c1f144b241e5016c8da0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
