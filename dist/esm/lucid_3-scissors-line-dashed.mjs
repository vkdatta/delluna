export const name="lucid_3-scissors-line-dashed";
export const id="dl_7e8f181dc7d54dac9901";
export const url=new URL("../icons/lucid_3-scissors-line-dashed.svg?v=7bdc05762c3f162390f64b96c9142260ae86449eda5a51e5ddd11d19ecae55cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
