export const name="handshake-duotone";
export const id="dl_53c1ddda4e064242b28c";
export const url=new URL("../icons/handshake-duotone.svg?v=2698b4889912a1526a8e4375cb342a9530d555c85a544ddd9fe1abc589ca4cbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
