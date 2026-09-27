export const name="sort_alt";
export const id="dl_6ee9797c81a1095db321";
export const url=new URL("../icons/sort_alt.svg?v=f4bbf9281eeffc4ec800a3b6ec0cf75381d0b8f243926affab43133f846a7b7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
