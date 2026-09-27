export const name="lucid_1-clipboard-pen-line";
export const id="dl_e305fde343c8461dae08";
export const url=new URL("../icons/lucid_1-clipboard-pen-line.svg?v=156da2ff4110bfa955668dbe24c1243b3890f98210bdc2f3ebc7d171f87f2495",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
