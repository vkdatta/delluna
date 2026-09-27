export const name="ghost-fill";
export const id="dl_bfa6b4e28eea42a3acae";
export const url=new URL("../icons/ghost-fill.svg?v=adc9795466368b060c6e16a308fc2d52105f5028ad952217f4e6594cd0741afa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
