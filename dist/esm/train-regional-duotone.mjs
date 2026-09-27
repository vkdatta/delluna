export const name="train-regional-duotone";
export const id="dl_7bcc253421b27295aeb9";
export const url=new URL("../icons/train-regional-duotone.svg?v=e31eef22224cb3a378c9c780c252cff999515a95c3c8746133a878a45d66be08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
