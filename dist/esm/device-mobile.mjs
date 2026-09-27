export const name="device-mobile";
export const id="dl_4cd3b75e8ef544828a17";
export const url=new URL("../icons/device-mobile.svg?v=06168dabd697bd34c053f91ff9136442b9e50d0a9eedc1dbd3333354e05c1bc7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
