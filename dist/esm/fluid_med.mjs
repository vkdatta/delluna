export const name="fluid_med";
export const id="dl_4e7b57d5c2f74014b2af";
export const url=new URL("../icons/fluid_med.svg?v=b131ba588b902757314f1168ba736a611e5bbfa8c6303fb02a4d724057be1300",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
