export const name="early_on-fill";
export const id="dl_caf6ff736ad642ec0feb";
export const url=new URL("../icons/early_on-fill.svg?v=fe97e1b282c70a3d7e2c1672c444453f856277da821ff1661660d8039c85e91e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
