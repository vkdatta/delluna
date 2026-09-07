export const name="sigma-fill";
export const id="dl_ceff252ab9f24085b5e4";
export const url=new URL("../icons/S/sigma-fill.svg?v=d15385ccf78aebdea69f7d8171632b42da40599427ff576ca331b005c3ed8584",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
