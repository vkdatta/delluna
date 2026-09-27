export const name="manufacturing-fill";
export const id="dl_97a310ef8c582b0118e0";
export const url=new URL("../icons/manufacturing-fill.svg?v=d19eee4167eedfe8a2f0dceb4d08d4dad884db1b69234f23baa880cda047ba7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
