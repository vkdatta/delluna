export const name="synagogue-fill";
export const id="dl_a603121558526353f4a3";
export const url=new URL("../icons/synagogue-fill.svg?v=8639b4b1db9e5ef78626a7b864ca99ee027de92a553ea5169de85ca8eb52d342",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
