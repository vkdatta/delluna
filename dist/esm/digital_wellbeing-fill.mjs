export const name="digital_wellbeing-fill";
export const id="dl_79766fa75ee0c984e7a6";
export const url=new URL("../icons/digital_wellbeing-fill.svg?v=bdd491d3d296f40a4aef1f5063df018fb4853e46f2349b73f0bd3bf2a325bfb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
