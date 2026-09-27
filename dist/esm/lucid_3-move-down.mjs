export const name="lucid_3-move-down";
export const id="dl_cf16da18b3fd4d1295fa";
export const url=new URL("../icons/lucid_3-move-down.svg?v=4a3a99eda833b84a136324ceb194b1274906947f0c4d3ff71a8323c287e218d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
