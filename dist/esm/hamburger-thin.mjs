export const name="hamburger-thin";
export const id="dl_83d19c919b504ed0901f";
export const url=new URL("../icons/hamburger-thin.svg?v=18f79071911e20a71a2eb88e8e1f6f9856c5f0817302b8967a651eff45e6d687",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
