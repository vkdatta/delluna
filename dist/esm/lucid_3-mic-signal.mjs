export const name="lucid_3-mic-signal";
export const id="dl_7f63ebb6b35141609374";
export const url=new URL("../icons/lucid_3-mic-signal.svg?v=f8e5814ac638bef84c68c1c6bc99ea10607039cf57b92cdd34b18c4c35a6b961",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
