export const name="settings_input_antenna-fill";
export const id="dl_ca8755ce4ba648c68104";
export const url=new URL("../icons/S/settings_input_antenna-fill.svg?v=ebf2aede410696b13f2471d34dc5f2cc0975f4fc4bf6c23afdf764dfb381a2e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
