export const name="speaker-high-thin";
export const id="dl_f8edb503749106c6045a";
export const url=new URL("../icons/speaker-high-thin.svg?v=ebfc866601d762bd172a2ba899b7eabf833f748cd0bc1a5b76233b32f7dba402",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
