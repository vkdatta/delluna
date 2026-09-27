export const name="globe-x";
export const id="dl_b18112e73b1c4f868e5b";
export const url=new URL("../icons/globe-x.svg?v=073770e9449682d5095e7a84cd3327c0bad9a62eb62439bc78c5de43029b47d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
