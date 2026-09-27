export const name="wifi-medium";
export const id="dl_13a4627f7bfc22a3d13b";
export const url=new URL("../icons/wifi-medium.svg?v=681813b6385ce6a0bac002c575a89e03b19f31624f45bd704b32c3a159a5771f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
