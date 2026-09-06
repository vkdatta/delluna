export const name="lucid_3-motorbike";
export const id="dl_60b2b5d5ff0140aab54c";
export const url=new URL("../icons/lucid_3-motorbike.svg?v=b3be623fc338882e5c112aaf7f8786e69b0b3268d513ee4af1f80a29c4620812",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
