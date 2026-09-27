export const name="border_vertical-fill";
export const id="dl_692048697f3cc6d7972b";
export const url=new URL("../icons/border_vertical-fill.svg?v=cc70daa44d6bd9876bebae1dbc0fd5306296b5fc5c546f83d4f1afc7e53bc2cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
