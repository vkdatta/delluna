export const name="lucid_1-cloud-cog";
export const id="dl_3bbf0f67957645c69bfc";
export const url=new URL("../icons/lucid_1-cloud-cog.svg?v=d011d32f604a02c1bb8303d291962a6cc2f2d6b033f5eac26b862cf223d7bca5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
