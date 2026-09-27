export const name="dry-fill";
export const id="dl_e368afa127674c7e88be";
export const url=new URL("../icons/dry-fill.svg?v=071020e3a258361718df8ad719edcb4dc1353dc7d15ff5d16bf23fded4ec1d5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
