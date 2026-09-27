export const name="wifi-cog";
export const id="dl_924e752c066743e6bfd5";
export const url=new URL("../icons/wifi-cog.svg?v=fafdbb15079b126432ce554833e5ac66b219a92acf1a15eb6fc292211f88211e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
