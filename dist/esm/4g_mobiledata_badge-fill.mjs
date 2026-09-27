export const name="4g_mobiledata_badge-fill";
export const id="dl_47928496176bd603e347";
export const url=new URL("../icons/4g_mobiledata_badge-fill.svg?v=89addc955f51f67809370f66f5481eb003c3908c1bc541e78b5753cad1f94489",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
