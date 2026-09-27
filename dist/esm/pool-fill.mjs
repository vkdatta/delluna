export const name="pool-fill";
export const id="dl_2cb3e91123fc1de981e8";
export const url=new URL("../icons/pool-fill.svg?v=f5347809f8a59447bda842ab54ef900b128a61cbfa5153785c244bb30fca5089",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
