export const name="user-switch-thin";
export const id="dl_10dbe8e57beeb6b2f766";
export const url=new URL("../icons/user-switch-thin.svg?v=2506d693c7d2b47f52fa0df49102bea63edabc15893f94021f023bdad1c52a20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
