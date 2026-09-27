export const name="4g_mobiledata_badge-fill";
export const id="dl_c2760a04a87f3be7c45d";
export const url=new URL("../icons/4g_mobiledata_badge-fill.svg?v=02b86b6ed61cfab30f784dbf15cc999a6c44996f71f9f99bcdb27535532e5f85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
