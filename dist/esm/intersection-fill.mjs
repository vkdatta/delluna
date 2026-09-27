export const name="intersection-fill";
export const id="dl_c54f0f5345a548129cfc";
export const url=new URL("../icons/intersection-fill.svg?v=c32b32c240e359d8c4ed1660c31b633cec9c7b68e3cbaf6ddef8bcf8b747e364",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
