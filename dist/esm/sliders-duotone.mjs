export const name="sliders-duotone";
export const id="dl_b6deb4d609df870820e3";
export const url=new URL("../icons/sliders-duotone.svg?v=7fcfcf65dd1f077570b84674d7ea9bcd6aa23b8f6113c48aae83733fdafa8c72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
