export const name="pinwheel-bold";
export const id="dl_adb605a91a5041f88fb8";
export const url=new URL("../icons/pinwheel-bold.svg?v=402e594d6e4464d9a3183201058faaf5b162ff3b3d0a311602ddd41a112943ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
