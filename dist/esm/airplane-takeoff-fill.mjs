export const name="airplane-takeoff-fill";
export const id="dl_fbe14ba5a69c4c7da283";
export const url=new URL("../icons/airplane-takeoff-fill.svg?v=55e09be91a16253db5a8061be9094d8b3c289237c54d30e154067317328de9bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
