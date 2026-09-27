export const name="lightning_stand-fill";
export const id="dl_805258aae22749cb6930";
export const url=new URL("../icons/lightning_stand-fill.svg?v=53e2c0597e16aabe2be98e392d66d2fd368c467c4f4a221772a5dc9988694dbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
