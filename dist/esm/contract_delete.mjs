export const name="contract_delete";
export const id="dl_6c529daed5414ed0a818";
export const url=new URL("../icons/contract_delete.svg?v=1b8dfa2475ba4d7dabc55dd984c552fed5b2d45579c371eb26c54764831e0297",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
