export const name="cursor-text-fill";
export const id="dl_34b946dd80404a44bd52";
export const url=new URL("../icons/cursor-text-fill.svg?v=6b3454bb4ec11f8023ca676744a784daa302ba307a9a4520e51c7889f94152fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
