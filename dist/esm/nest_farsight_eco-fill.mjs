export const name="nest_farsight_eco-fill";
export const id="dl_654b229e496036c30cbf";
export const url=new URL("../icons/nest_farsight_eco-fill.svg?v=88436a57834a3a6375b0daf7250a9e5b2c5f6e28c8ce82c216b25ec72d59e054",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
