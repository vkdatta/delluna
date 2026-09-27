export const name="knife-duotone";
export const id="dl_f1f33775382d42359ee5";
export const url=new URL("../icons/knife-duotone.svg?v=8807a45f53da8d8de3661720941e920524fc9f3f6f4b93768f791b5a931c7cec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
