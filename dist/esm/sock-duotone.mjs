export const name="sock-duotone";
export const id="dl_470bed9f168552ac7f7c";
export const url=new URL("../icons/sock-duotone.svg?v=b18fb798982752e3784770e83818f329e5af2a84dd7b46a3f5ee051a787f8fd7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
