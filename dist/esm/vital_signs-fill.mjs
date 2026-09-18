export const name="vital_signs-fill";
export const id="dl_a4c301946e374b57b19b";
export const url=new URL("../icons/vital_signs-fill.svg?v=380f4b0cabb2daf84732f31c4221437733c26146551ccadbffd1cddd57615db4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
