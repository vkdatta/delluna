export const name="21mp-fill";
export const id="dl_857c7493cac54cccbc3e";
export const url=new URL("../icons/2/21mp-fill.svg?v=0b54e4dba7c279fe1ab27ea18982287328b71db1a638510935ad8f96e79c4a23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
