export const name="share-network-light";
export const id="dl_d911bab4238b421796cd";
export const url=new URL("../icons/S/share-network-light.svg?v=946c5d6d0a51f4e58e0d675c44b6ceeb881dc8c99bd91269085d749ac16dc2ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
