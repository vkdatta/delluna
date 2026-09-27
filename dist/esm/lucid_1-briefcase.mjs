export const name="lucid_1-briefcase";
export const id="dl_78519d027e814f6ca73b";
export const url=new URL("../icons/lucid_1-briefcase.svg?v=7fa563c4597be4a5310dd5811870bd0f4217f7d7cf639836a7db7e2e113e10cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
