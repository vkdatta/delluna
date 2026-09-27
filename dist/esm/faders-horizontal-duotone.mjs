export const name="faders-horizontal-duotone";
export const id="dl_55c5e00e1ed9458f8868";
export const url=new URL("../icons/faders-horizontal-duotone.svg?v=73d8de8d5c75b30ed7a037a8b55be3f92c95e2ae5616c5e9555c4e32f2bfe6f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
