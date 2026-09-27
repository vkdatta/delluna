export const name="taxi_alert-fill";
export const id="dl_367b8adba0008c08e972";
export const url=new URL("../icons/taxi_alert-fill.svg?v=c680f8f4b07bbd63d8eb51db80fa6fde0bd8c2cfea055b161f8768f5ec397013",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
