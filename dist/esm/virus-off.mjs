export const name="virus-off";
export const id="dl_7bcd80a58d4246a3939e";
export const url=new URL("../icons/virus-off.svg?v=6e9d7a12ee720836eafe06f65bd222eeb255ee2bdff81185639b5d8f11fdfc98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
