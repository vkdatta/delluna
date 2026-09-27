export const name="tray-light";
export const id="dl_f216f0533334268386c3";
export const url=new URL("../icons/tray-light.svg?v=1346f09d623a0f69740e231941d21cf79b30e39179bb2e406eb211b3026a2b2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
