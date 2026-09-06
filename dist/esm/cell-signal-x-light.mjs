export const name="cell-signal-x-light";
export const id="dl_1db744bcf75243c88009";
export const url=new URL("../icons/cell-signal-x-light.svg?v=420a95ad08b1219855cbd806557f8107d777475a8b48335b808fdb07022e1b60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
