export const name="lucid_1-arrow-up-narrow-wide";
export const id="dl_b6adf2fa1b2e480aa29b";
export const url=new URL("../icons/lucid_1-arrow-up-narrow-wide.svg?v=64419d07d155a3ab524ff4dca7e8be73818ff4394f42df9a4f95f8c17a9df066",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
