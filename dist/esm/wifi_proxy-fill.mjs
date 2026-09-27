export const name="wifi_proxy-fill";
export const id="dl_0f7978e08ccfae96376c";
export const url=new URL("../icons/wifi_proxy-fill.svg?v=2771a4594256ae5675da602aae439c364587d471d5e8caca523950d979deac83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
