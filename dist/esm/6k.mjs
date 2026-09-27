export const name="6k";
export const id="dl_883a793b7370d508ad1b";
export const url=new URL("../icons/6k.svg?v=d9def687b67a85ecc92b240ac7e2c863091607462d87774c4f82e865905f0c30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
