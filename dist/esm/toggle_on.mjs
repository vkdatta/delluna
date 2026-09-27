export const name="toggle_on";
export const id="dl_cff60e2827dedfadc164";
export const url=new URL("../icons/toggle_on.svg?v=dfbff1d56c793f9a701e567f59f201e8bc32de8113546a88bbc63e16e2ed6d64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
