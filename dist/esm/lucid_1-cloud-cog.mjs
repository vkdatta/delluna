export const name="lucid_1-cloud-cog";
export const id="dl_3bbf0f67957645c69bfc";
export const url=new URL("../icons/lucid_1-cloud-cog.svg?v=29925a5e1d41c9d43db8b735b71e67b77ef961def4567b7c61c122d099f5740a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
