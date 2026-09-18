export const name="add_home-fill";
export const id="dl_363b018882984b84abec";
export const url=new URL("../icons/add_home-fill.svg?v=cb3d36c832400ce6852b7531ae7bb2dffaa3d63dbe67572b7205f5228bd0d936",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
