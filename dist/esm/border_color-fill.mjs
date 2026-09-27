export const name="border_color-fill";
export const id="dl_5e93657fe74b4f883941";
export const url=new URL("../icons/border_color-fill.svg?v=26e7f1f777041c2cec67298c12815a5f41e41f6965b711b5d01dd20f9d640a68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
