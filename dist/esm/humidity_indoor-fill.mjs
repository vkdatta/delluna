export const name="humidity_indoor-fill";
export const id="dl_dcabc2e2e4f89b3290f1";
export const url=new URL("../icons/humidity_indoor-fill.svg?v=ced94d26638be91e645c6113a648f8efe9ec34ac193234ff1953eac5682fe57a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
