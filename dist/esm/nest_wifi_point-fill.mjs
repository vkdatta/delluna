export const name="nest_wifi_point-fill";
export const id="dl_3bf1e0a980a49380ee61";
export const url=new URL("../icons/nest_wifi_point-fill.svg?v=1809a1b27a295bc4356dfb7624f1e3bb356ad938f0389cd8c75c6e57bd5610f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
