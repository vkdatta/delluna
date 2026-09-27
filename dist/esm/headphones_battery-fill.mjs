export const name="headphones_battery-fill";
export const id="dl_5dc22c347100232c0e54";
export const url=new URL("../icons/headphones_battery-fill.svg?v=531e2b6e56513307caac4f7ca46f7af56c1a9827810aa8215e96ed999c3c4456",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
