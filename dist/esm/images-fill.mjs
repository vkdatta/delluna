export const name="images-fill";
export const id="dl_b48446d72a964cf7b8f7";
export const url=new URL("../icons/images-fill.svg?v=075f1302fddbea8de0b59cab35127b1dff0883e5ef952568fa5260a0f39a4573",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
