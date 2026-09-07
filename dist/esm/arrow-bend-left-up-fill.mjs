export const name="arrow-bend-left-up-fill";
export const id="dl_14c6a4eaaaf24d6ca411";
export const url=new URL("../icons/arrow-bend-left-up-fill.svg?v=a21746912f664f19cec0cd3d0f2d7aa84bd6e521cc8cf6bfcf95001eafd151d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
