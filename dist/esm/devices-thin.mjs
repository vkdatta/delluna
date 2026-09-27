export const name="devices-thin";
export const id="dl_70b0616c96d44dd9a3fa";
export const url=new URL("../icons/devices-thin.svg?v=327f57d55d74d18b00a7513649d052fbefe245e14dfe3d103faf243eb979e578",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
