export const name="call_end";
export const id="dl_280d43e0f120adcbddb8";
export const url=new URL("../icons/call_end.svg?v=f0f8a300b9d763aa2dbd8101723715d322fb7d20ae7d030d34fe715581fd8eac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
