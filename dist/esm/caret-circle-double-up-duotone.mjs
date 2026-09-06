export const name="caret-circle-double-up-duotone";
export const id="dl_d9e86fde3aa54efca2d4";
export const url=new URL("../icons/caret-circle-double-up-duotone.svg?v=51a50fb06f24ac86d574a7692a91aa1f4a13d041e1a85a0634ad8fe94cf2a703",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
