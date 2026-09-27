export const name="merge_type";
export const id="dl_e78aaafae1e32d991a0b";
export const url=new URL("../icons/merge_type.svg?v=e57b64c3dfed5c31d91cf80b20b26ecc563300a33c85fb80cd8738b60df1a414",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
