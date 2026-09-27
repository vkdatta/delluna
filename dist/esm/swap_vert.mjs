export const name="swap_vert";
export const id="dl_a02b45df863a85303213";
export const url=new URL("../icons/swap_vert.svg?v=02044fcf115587d2d707f0d1b7aeaa08d77ba87ed1b2ab60fa48235e668159c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
