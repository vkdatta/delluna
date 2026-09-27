export const name="resize-duotone";
export const id="dl_d55d5a8616184cfd88e3";
export const url=new URL("../icons/resize-duotone.svg?v=0d1cd7667ce47aa0fde839238977134957a3ed4dda30ffd2b77161156b063204",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
