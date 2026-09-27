export const name="file_download_off-fill";
export const id="dl_a67d6b511a8a0d8a7991";
export const url=new URL("../icons/file_download_off-fill.svg?v=2210bd5b56117ee6dbc02e31b288f739ad1e0ba35a6d109bce8505da63588e21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
