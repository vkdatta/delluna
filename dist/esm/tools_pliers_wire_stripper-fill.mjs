export const name="tools_pliers_wire_stripper-fill";
export const id="dl_8b1b96fcab2c40939715";
export const url=new URL("../icons/tools_pliers_wire_stripper-fill.svg?v=03097429b21f34a5109b403d093aad9fbf360210295900a0779045f449ef43a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
