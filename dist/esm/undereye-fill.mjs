export const name="undereye-fill";
export const id="dl_804e2ef6f6acb4b85bb3";
export const url=new URL("../icons/undereye-fill.svg?v=0f1b705e4d7598ad9a1b73e3bffb6d6c88d15fd277607dea707fa19967174d0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
