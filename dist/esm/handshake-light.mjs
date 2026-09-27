export const name="handshake-light";
export const id="dl_f362a5db5d80490ab85e";
export const url=new URL("../icons/handshake-light.svg?v=dc0c639642a6b21367b9b534eae181ac65b1eaacc43a1d94282ea7fd1b7d207d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
