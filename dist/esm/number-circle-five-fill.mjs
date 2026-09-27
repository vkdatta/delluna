export const name="number-circle-five-fill";
export const id="dl_bd99b2054a2347ab8524";
export const url=new URL("../icons/number-circle-five-fill.svg?v=875bdfc3ee38721efb1ab43f3d2f7d7d0b7e7e1b7522dbcd1d2d2986316f484b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
