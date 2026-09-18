export const name="family_home";
export const id="dl_8d5e581c87c1405fbc04";
export const url=new URL("../icons/family_home.svg?v=31e1c274ff2d9b6e2f48f2664498aa7d8a3914489bfc73be1ef71520aff23879",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
