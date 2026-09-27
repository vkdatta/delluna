export const name="light_group";
export const id="dl_26696b773c2519961a91";
export const url=new URL("../icons/light_group.svg?v=4980eb4a4867c6c5b8137bea355ab44a611b9f8f0547147867b219e779503778",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
