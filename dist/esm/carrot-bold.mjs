export const name="carrot-bold";
export const id="dl_9a98167496254b669bfa";
export const url=new URL("../icons/carrot-bold.svg?v=59f15b84adbd289cc7f30fc506eb4ff367e477b37a1840af94b900d20a4832c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
