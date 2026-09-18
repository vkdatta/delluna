export const name="wb_iridescent-fill";
export const id="dl_efdafedcedcf45c79700";
export const url=new URL("../icons/W/wb_iridescent-fill.svg?v=7bee178fe6c78c86555fc20f038f1c0e47924d5e591b471380ae3201e3169afb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
