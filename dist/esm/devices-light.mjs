export const name="devices-light";
export const id="dl_1e22da2d9307465c83a1";
export const url=new URL("../icons/devices-light.svg?v=d2cb6325f253be47b54e026db9b6aa4f7c5810f3ec7d7ed69fb0c4e791fb031e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
