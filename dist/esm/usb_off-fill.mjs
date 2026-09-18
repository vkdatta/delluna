export const name="usb_off-fill";
export const id="dl_9fd61df8500e4b3ba962";
export const url=new URL("../icons/U/usb_off-fill.svg?v=22effec813b1a6fa3387b3360e584aed6d333f316ef72303053f99d11b4e4cd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
