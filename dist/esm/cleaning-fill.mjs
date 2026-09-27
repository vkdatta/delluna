export const name="cleaning-fill";
export const id="dl_4c1458744c79a5fef600";
export const url=new URL("../icons/cleaning-fill.svg?v=c9b279858b453ba48cfc40309009080c2745e54c1c1980f993f67adb858cc485",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
