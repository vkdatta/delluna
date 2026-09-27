export const name="lucid_1-clock-6";
export const id="dl_fccce8e2393947adb08e";
export const url=new URL("../icons/lucid_1-clock-6.svg?v=a77e0d68675ae923992cb99345673b745ad72d2a3c54e144edf9fc91b4663ef0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
