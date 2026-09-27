export const name="reset_exposure-fill";
export const id="dl_d284ef39ece2fa1c35f1";
export const url=new URL("../icons/reset_exposure-fill.svg?v=6e7113cc6979df28ae3e6f1e1d21e7421669f2665ef0a862c27e5a3792f22b4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
