export const name="deskphone-fill";
export const id="dl_382441878e7c9f7cdf7e";
export const url=new URL("../icons/deskphone-fill.svg?v=19630545aa3fa0e0bda2175fbc2c58842ac508b707f7d9b972222e979da44346",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
