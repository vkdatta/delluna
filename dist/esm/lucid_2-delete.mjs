export const name="lucid_2-delete";
export const id="dl_fe21c95d493f4965aae3";
export const url=new URL("../icons/lucid_2-delete.svg?v=f87dd6cbed1dc65c31db4601354bd52c76ac2fa4aa82e4ad269c083f2c1de38d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
