export const name="chef-hat-bold";
export const id="dl_44bf5fff5aca49409293";
export const url=new URL("../icons/chef-hat-bold.svg?v=7763b694761c01ba644d4f7fa142a9c8d5c6052b63985cff53c69a83795728bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
