export const name="lucid_3-square-check";
export const id="dl_65a2435f246e45c595bc";
export const url=new URL("../icons/lucid_3-square-check.svg?v=05b5c3330a99130fdb91017999fa47162bafca6c1628d159cd0a434968f9626a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
