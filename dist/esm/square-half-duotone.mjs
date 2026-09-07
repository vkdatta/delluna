export const name="square-half-duotone";
export const id="dl_c51698d64bac46ddbd9b";
export const url=new URL("../icons/S/square-half-duotone.svg?v=7dd8b51e62c7ee5efea367e79fd4887d0cc701187b0676a383fbba88668e5ef7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
