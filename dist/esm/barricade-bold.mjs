export const name="barricade-bold";
export const id="dl_9b4aea6410bc48daaf01";
export const url=new URL("../icons/barricade-bold.svg?v=b0fd55eb261481996d5bf4429580a5d7eda6bfcf304a75f0a741130e27e44d1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
