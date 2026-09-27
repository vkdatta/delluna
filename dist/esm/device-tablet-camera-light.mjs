export const name="device-tablet-camera-light";
export const id="dl_16ac3c1127c14b4699dc";
export const url=new URL("../icons/device-tablet-camera-light.svg?v=20c52c89306cea694c1ba316bb02a3c20be595d653f85c542cd252793099bbdf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
