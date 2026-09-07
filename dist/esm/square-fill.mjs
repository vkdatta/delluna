export const name="square-fill";
export const id="dl_8ad7735ce2494d1e8e9b";
export const url=new URL("../icons/S/square-fill.svg?v=2b79576bc5936252752ed288dfeb9ca8204eb4acbcf60002f0effafc760f2ed0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
