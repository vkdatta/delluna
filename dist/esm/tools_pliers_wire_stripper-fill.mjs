export const name="tools_pliers_wire_stripper-fill";
export const id="dl_ae4978f127ef1c7ae66d";
export const url=new URL("../icons/tools_pliers_wire_stripper-fill.svg?v=7085174a84ee9a60b4c0682227ac4ce33b78773c4fb14dbd8bd09fd99035906f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
