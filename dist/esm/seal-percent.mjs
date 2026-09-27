export const name="seal-percent";
export const id="dl_1f5b7d347f0c6d79884e";
export const url=new URL("../icons/seal-percent.svg?v=ca3aae7bbe332e86578ba5d84c84a78c8a9436b92dbdbded76b1c40334d6d032",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
