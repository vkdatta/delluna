export const name="more_vert-fill";
export const id="dl_ff7f55771b5940de9656";
export const url=new URL("../icons/more_vert-fill.svg?v=66e22751072cce62574e5a1e3fe394be059abf87bd28d946c49661b01ddfd6bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
