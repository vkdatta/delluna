export const name="lucid_1-case-upper";
export const id="dl_2c07a38fb8db4d98912c";
export const url=new URL("../icons/lucid_1-case-upper.svg?v=a03945549005f6b6d5c42d405ad5249f5e17e136d95d6f5b4169885b82f6fe92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
