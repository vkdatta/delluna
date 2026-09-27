export const name="podium-fill";
export const id="dl_f9852b26911cfa517d0b";
export const url=new URL("../icons/podium-fill.svg?v=28c234f8b299a62bcec695a1b5a61a9053442cb7e96faec8860cd46ca41e55ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
