export const name="local_florist-fill";
export const id="dl_9acb43afe03f436081be";
export const url=new URL("../icons/L/local_florist-fill.svg?v=87d7754c83d6d6712b42391c2c19fd18386efc021cb77302fbf76f7601608e30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
