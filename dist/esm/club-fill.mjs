export const name="club-fill";
export const id="dl_5b16b75605cd43e79749";
export const url=new URL("../icons/club-fill.svg?v=17f25a7a41576e2107d023ace7df00d07fbba305e4d34c68619214a39c6a3adb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
