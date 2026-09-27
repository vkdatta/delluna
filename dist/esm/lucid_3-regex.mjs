export const name="lucid_3-regex";
export const id="dl_e7732b6e7e184246a9d3";
export const url=new URL("../icons/lucid_3-regex.svg?v=f84746c14672dc7537f793aae32edf3779fc7ab00203f9a310a34a6b0426ea04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
