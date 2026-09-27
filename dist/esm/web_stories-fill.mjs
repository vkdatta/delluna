export const name="web_stories-fill";
export const id="dl_8223c63f0a5406248093";
export const url=new URL("../icons/web_stories-fill.svg?v=f2c4d307e1fc3e57ecce0c00499ee092d0e7b7791c64819f7522d62400c86ff7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
