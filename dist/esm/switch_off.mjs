export const name="switch_off";
export const id="dl_70eb56ec794278354763";
export const url=new URL("../icons/switch_off.svg?v=6b707ed3f840d7142f0fa409dbab70a31d4764cec5d8082ec41fd5ce8e3f5d53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
