export const name="add_moderator";
export const id="dl_5a366d033df0f057464b";
export const url=new URL("../icons/add_moderator.svg?v=c1bb690ded0b3847ca88a21d588cc4f12ff3ee29217b10e8f154a722f358bd23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
