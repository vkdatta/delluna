export const name="delete_sweep";
export const id="dl_73386519769940c28d0c";
export const url=new URL("../icons/D/delete_sweep.svg?v=ee469e27fd2e46222ee7facc14681977ef6fbe7400c5652c11b276acb1e57ab2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
