export const name="3g_mobiledata_badge";
export const id="dl_89009a710c6984929979";
export const url=new URL("../icons/3g_mobiledata_badge.svg?v=21dcd3cae1d45ce570bd11b0b440e86931d42912d815fdad824381b522fbc73e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
