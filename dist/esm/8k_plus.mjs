export const name="8k_plus";
export const id="dl_333319baf5576df39324";
export const url=new URL("../icons/8k_plus.svg?v=9eaf28e4cef7444c8d5fabd9f0ae5684f47d3853e2c45ef75954e0027fcc2ec8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
