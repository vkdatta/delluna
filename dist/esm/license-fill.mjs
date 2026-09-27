export const name="license-fill";
export const id="dl_191089ec7346ebea5793";
export const url=new URL("../icons/license-fill.svg?v=5f5de2bf92a0c6283e313ef87f1fd47cfb9a9a5d1880e09a66a7b9fe251a4391",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
