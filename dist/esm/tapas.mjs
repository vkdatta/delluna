export const name="tapas";
export const id="dl_6e6db1e3450cf715349b";
export const url=new URL("../icons/tapas.svg?v=f6dd6a4929c97dc7a546f5ccc9b20c33f5f80ea69788b7ec5065eab472d1f3c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
