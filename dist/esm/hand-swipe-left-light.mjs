export const name="hand-swipe-left-light";
export const id="dl_7459e3af74c645379bf3";
export const url=new URL("../icons/hand-swipe-left-light.svg?v=a8b4bc693aa621602f6dd00488821f865e16830a6811e6e805dd9a1ff3749aec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
