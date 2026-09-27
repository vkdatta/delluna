export const name="exclamation-mark-duotone";
export const id="dl_56e80d377dc74b6780f9";
export const url=new URL("../icons/exclamation-mark-duotone.svg?v=9753a6d06250bf958929e80657dae12f9beb63877f785e25a521748609e103aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
