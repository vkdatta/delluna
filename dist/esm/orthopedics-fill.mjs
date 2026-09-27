export const name="orthopedics-fill";
export const id="dl_8cc18ddd9ec6ceb13470";
export const url=new URL("../icons/orthopedics-fill.svg?v=cfef8d70c32174cd83a53debb24ff15c7bfd54a482ba575831b461156b78086a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
