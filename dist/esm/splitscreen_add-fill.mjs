export const name="splitscreen_add-fill";
export const id="dl_3a28a8bb5e1d48a5959b";
export const url=new URL("../icons/S/splitscreen_add-fill.svg?v=668d01de2f370d5f42509b8db1ec0286ec045341cd0ff2e804ed519b6fe6b350",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
