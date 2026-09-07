export const name="file-png-light";
export const id="dl_7e0ca4c03fb4458ab2bb";
export const url=new URL("../icons/file-png-light.svg?v=7a4b13e225761193dc7aa7d4ede8e90b3ebea534f773c44acc75a2a3b7c2ba0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
