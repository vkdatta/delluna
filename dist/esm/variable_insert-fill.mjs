export const name="variable_insert-fill";
export const id="dl_caa6303c42c248860a1e";
export const url=new URL("../icons/variable_insert-fill.svg?v=5df5546ff09215a8ccfcfc111bc70690e8edbd84a81fc58e67ffc11dd8a2f895",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
