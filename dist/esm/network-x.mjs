export const name="network-x";
export const id="dl_1422a055fbf24f8f8cbb";
export const url=new URL("../icons/network-x.svg?v=da7522c5d35ad000113f21783a5e694e1f078ebfee40348256b5c29f59fe9cb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
