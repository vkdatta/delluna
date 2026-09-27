export const name="cancel_presentation";
export const id="dl_991dd73dddec714869b2";
export const url=new URL("../icons/cancel_presentation.svg?v=34e3781ec3af8e4e43d1c7bd88ee3a91c1ada6b53965d3f4d368182e85509cdf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
