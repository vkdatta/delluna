export const name="church";
export const id="dl_b5bb3dd4dc704ceeb94a";
export const url=new URL("../icons/C/church.svg?v=b511901d324f6c757566130a7e5e5795885ff12e843944dfb2c86c7c81517655",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
