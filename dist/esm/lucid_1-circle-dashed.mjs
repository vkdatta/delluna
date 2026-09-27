export const name="lucid_1-circle-dashed";
export const id="dl_d1cca5234d57451aae57";
export const url=new URL("../icons/lucid_1-circle-dashed.svg?v=08abc75ea13d15c2fb123195e01eeeea0c9b3b429396b57e3e41542e7119b028",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
