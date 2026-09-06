export const name="not-member-of-duotone";
export const id="dl_1943dc2e8ac54fbbbb3f";
export const url=new URL("../icons/not-member-of-duotone.svg?v=6e9bf777545a39cf308dbfa2e43f38dd927f7a465d79b410eb75032104ea1ecc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
