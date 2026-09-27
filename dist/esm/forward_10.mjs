export const name="forward_10";
export const id="dl_ecd3a51d6347d2d9ec40";
export const url=new URL("../icons/forward_10.svg?v=203c6980d5e6a6cee312617ebd437a9b059ddfac931b3f618a8a5903c9c3a919",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
