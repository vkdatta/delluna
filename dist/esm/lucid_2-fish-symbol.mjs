export const name="lucid_2-fish-symbol";
export const id="dl_fe0b1ea082ee4fe99cbc";
export const url=new URL("../icons/lucid_2-fish-symbol.svg?v=f33ec2e9c9fe87c7a74535d9943c141c2c2fa8cc358227e4b34374a70f83fbaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
