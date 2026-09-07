export const name="stool-duotone";
export const id="dl_bf0960c5fe4f484ead29";
export const url=new URL("../icons/S/stool-duotone.svg?v=eec974ebd480d3da919ba72e274a508ddff07194a8e60d2240b2ad57f0e18280",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
