export const name="texture_add-fill";
export const id="dl_ee53b70cb82e9cf4095e";
export const url=new URL("../icons/texture_add-fill.svg?v=a69efa89cbc7f4f0fbc03a6f91acdfced1aa17ba3de0afdfe1822f3fdd0f2afc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
