export const name="list-bullets-duotone";
export const id="dl_5ff1846fd65e405e8818";
export const url=new URL("../icons/list-bullets-duotone.svg?v=55fe775c679f63f9a8a7d5f327685d09d5be1f15d710237a5a0224efabbc386f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
