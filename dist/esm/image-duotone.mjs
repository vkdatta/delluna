export const name="image-duotone";
export const id="dl_b0f738391f774425a9ec";
export const url=new URL("../icons/image-duotone.svg?v=26fe7ddadaa844fd6837d50110b41ae0000b39a0886bbe101d369e75a76a7706",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
