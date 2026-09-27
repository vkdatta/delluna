export const name="supervisor_account";
export const id="dl_c907d6629a779117928e";
export const url=new URL("../icons/supervisor_account.svg?v=3ed1a3634201e7cf898a16dc6dd8b27b33e26f9dcede360d771ea54855d39830",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
