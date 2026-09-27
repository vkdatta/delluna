export const name="cell-signal-x-duotone";
export const id="dl_0cd69ea5eeb54be880b4";
export const url=new URL("../icons/cell-signal-x-duotone.svg?v=84663e1187d5281e3e2837ffb95eb8f6386bcb1d011c36acc7a3423716e950ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
