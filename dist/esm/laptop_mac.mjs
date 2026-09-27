export const name="laptop_mac";
export const id="dl_64913fea0dad3b041f45";
export const url=new URL("../icons/laptop_mac.svg?v=bca82ff6b0585b348a8febfb0d27901cf7502fe14cc17f8c1c10f7ba5e415a54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
