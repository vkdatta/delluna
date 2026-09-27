export const name="sock";
export const id="dl_e1409aaee443743fff29";
export const url=new URL("../icons/sock.svg?v=a25ebd71644136f7aaffc480a8bf5b85eca593b9e5b07e765aaef7532d082913",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
