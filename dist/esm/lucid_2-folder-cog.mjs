export const name="lucid_2-folder-cog";
export const id="dl_648a908b01724c33b97b";
export const url=new URL("../icons/lucid_2-folder-cog.svg?v=1039a0afa29bd253fa4e8012b12febde3034b5af054c1f55e0ac70a23bcae8aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
