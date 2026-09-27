export const name="seal-check-fill";
export const id="dl_301b3215a73b1ce22c0c";
export const url=new URL("../icons/seal-check-fill.svg?v=8b44fa53ae43cdec6c4c0e2e61c829bc6c49959679fd7020b67c0e6f02083b5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
