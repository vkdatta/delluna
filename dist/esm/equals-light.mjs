export const name="equals-light";
export const id="dl_1b50c029f6f345749701";
export const url=new URL("../icons/equals-light.svg?v=585b38636c460a148b86603478a5dc25b0bd3d42a55abc3e382d86898bab6f67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
