export const name="disc-bold";
export const id="dl_58d62c01c7f14e0dac08";
export const url=new URL("../icons/disc-bold.svg?v=9c7699b71714f66f89b18a16f35c4332a49f9d48290caa41b6d8f8349a4cc56d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
