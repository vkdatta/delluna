export const name="user-list-thin";
export const id="dl_2a78ee2787692707dfc0";
export const url=new URL("../icons/user-list-thin.svg?v=0b4ba64e769ec3529be26e7d5633d290d50e17831210eb0543eb8602a5ad29f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
