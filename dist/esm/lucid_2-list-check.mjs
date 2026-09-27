export const name="lucid_2-list-check";
export const id="dl_1e284780057f4cf5a3fd";
export const url=new URL("../icons/lucid_2-list-check.svg?v=c93fedf4583464fa723b149bbac639405f7e38cf7b45294a2591b6caf65f05ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
