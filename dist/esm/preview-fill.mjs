export const name="preview-fill";
export const id="dl_7f2af4a8f9cf4c0aa8cf";
export const url=new URL("../icons/preview-fill.svg?v=f7aac986ee2a301a1d1ef3b41b96a59c8b68b632d85b79a44bf2af9d0b73a0a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
