export const name="bus_alert-fill";
export const id="dl_945f22bde5abf67f7d69";
export const url=new URL("../icons/bus_alert-fill.svg?v=3421bc72a55f68c720aa228ea5d133cec4ebf2b8cb2932fcd01e946923708a55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
