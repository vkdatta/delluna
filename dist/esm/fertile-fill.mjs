export const name="fertile-fill";
export const id="dl_1267bc85c6035df8bb43";
export const url=new URL("../icons/fertile-fill.svg?v=1038e69f0b60ebd5f9755a39b2596dec2396ecb097463a5245dea486cedea564",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
