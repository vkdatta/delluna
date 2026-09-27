export const name="window_open";
export const id="dl_4d35112e25fac60a8dc6";
export const url=new URL("../icons/window_open.svg?v=b24cae85c81029884b9050af937c0d1055b2706513c229248b774902aad349e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
