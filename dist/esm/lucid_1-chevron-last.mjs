export const name="lucid_1-chevron-last";
export const id="dl_5a08b9a6a63542cd9512";
export const url=new URL("../icons/lucid_1-chevron-last.svg?v=252376a387fc1442d62add544730f3c341c2b63904ba2183193d2fd4c3985b1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
