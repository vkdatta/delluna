export const name="lucid_2-lasso-select";
export const id="dl_de8cfc5401694dbfb83c";
export const url=new URL("../icons/lucid_2-lasso-select.svg?v=c73e6d45ea52763141d5b371aeda306dbb4f0989cf9fad05f4ea2b53378df23f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
