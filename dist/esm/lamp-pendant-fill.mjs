export const name="lamp-pendant-fill";
export const id="dl_25bf28ad533648acbfea";
export const url=new URL("../icons/lamp-pendant-fill.svg?v=b6d22a95a6da4769384e29432574b72dc68494aaba684243c6e278b0391d562c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
