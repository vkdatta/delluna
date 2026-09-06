export const name="chef-hat-bold";
export const id="dl_44bf5fff5aca49409293";
export const url=new URL("../icons/chef-hat-bold.svg?v=36d4ddad0779967de0f58c11ecde2f4f22a28f62a68717a3104e3231f0809cb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
