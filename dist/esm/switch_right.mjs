export const name="switch_right";
export const id="dl_8fc5bbd7d93ebdcebb9e";
export const url=new URL("../icons/switch_right.svg?v=33c83c9367a6dae753d17836595d59f113dd7de1424052e706907c475dfab953",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
