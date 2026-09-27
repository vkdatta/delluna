export const name="path-fill";
export const id="dl_f008d5d7bf104027bec9";
export const url=new URL("../icons/path-fill.svg?v=52a3d96b97a54987a5bb014ceaa932e3ea462950bd32c39e046a0951b5b61eec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
