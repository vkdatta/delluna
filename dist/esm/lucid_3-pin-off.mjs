export const name="lucid_3-pin-off";
export const id="dl_ad44dc7db6eb48bd99e4";
export const url=new URL("../icons/lucid_3-pin-off.svg?v=98e4ba8f8b80911754e4c2fdb6a42d2fec61c1033a2dd2696bcbfaeaf7b6b38c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
