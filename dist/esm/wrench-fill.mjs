export const name="wrench-fill";
export const id="dl_f4e57b9bedefb5e0d852";
export const url=new URL("../icons/wrench-fill.svg?v=88ea58ce3a558a481b974424f1f4bf3e1c1d68cdd2233bb8213cc3ba39a774eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
