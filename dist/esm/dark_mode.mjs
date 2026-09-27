export const name="dark_mode";
export const id="dl_cf30345ad2b66d18794e";
export const url=new URL("../icons/dark_mode.svg?v=9e4a175244d4aba9136c9d43eab95b25f6c61a3debbb759a17feaabbd0a7bfdd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
