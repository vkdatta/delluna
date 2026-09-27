export const name="cloud_lock-fill";
export const id="dl_e81915774e9091cdacf0";
export const url=new URL("../icons/cloud_lock-fill.svg?v=acc0a52b56db008a8149c1f1ab1ce160b0c33a264292a2a95beaa2827b7bbb5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
