export const name="west-fill";
export const id="dl_96b566906c583e6c6bbf";
export const url=new URL("../icons/west-fill.svg?v=4a894b3c8f00f3220b8036ea22eea1b26d442364afeba4ccea4f9c136120e5a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
