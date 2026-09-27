export const name="density_small-fill";
export const id="dl_be0856322886dcacbea1";
export const url=new URL("../icons/density_small-fill.svg?v=c8c0a36d8372f573c4d53d272506801d51ed929bdc609829bca366704d9fe2c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
