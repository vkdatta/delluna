export const name="9k_plus";
export const id="dl_c0b5cfbbe9d218ba6552";
export const url=new URL("../icons/9k_plus.svg?v=623bfbbaa62a77e7a72ec32e24a51ee28d0d5daeac95d327c142235d4a326dc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
