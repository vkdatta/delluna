export const name="cloud-x";
export const id="dl_a1ae6d43f58e4d4c95a4";
export const url=new URL("../icons/cloud-x.svg?v=28ca4b9adb62c041536808aa8d9ee15fb1ecae845c415851a6f3577066ad66eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
