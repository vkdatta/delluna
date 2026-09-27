export const name="cleaning_bucket-fill";
export const id="dl_58b79502e5bb788ae666";
export const url=new URL("../icons/cleaning_bucket-fill.svg?v=4191ab8b45c4a7b275dae8488b7a269bbf981ab6da77adf20a2047bd219e0f86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
