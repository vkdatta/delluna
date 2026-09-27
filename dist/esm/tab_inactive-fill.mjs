export const name="tab_inactive-fill";
export const id="dl_8641a5739d620612cbab";
export const url=new URL("../icons/tab_inactive-fill.svg?v=0e00819cf564868703fb212f9c3534b1da8f8ac96c32cfa7b2251f497475f737",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
