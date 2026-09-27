export const name="sliders-light";
export const id="dl_a42be84fc164eda40ba3";
export const url=new URL("../icons/sliders-light.svg?v=f9597640665bf17bce47ea2e3e1a14ee1103dfd410ce52dde44b06faccc8a8db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
