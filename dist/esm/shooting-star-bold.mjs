export const name="shooting-star-bold";
export const id="dl_e1925bc6179013a17309";
export const url=new URL("../icons/shooting-star-bold.svg?v=f64918842bea9b15cf72e5ae9288eedd2047ed193e732140745aa2c599e5fee0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
