export const name="skip_next-fill";
export const id="dl_e54e85121fd97bac5fb8";
export const url=new URL("../icons/skip_next-fill.svg?v=4ec2e87326d799eeec1d6b9359077ae157b745a6f7f4e565ec1bc6e36bd5aa09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
