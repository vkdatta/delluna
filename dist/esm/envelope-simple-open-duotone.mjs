export const name="envelope-simple-open-duotone";
export const id="dl_d07b0b003d064a22ac92";
export const url=new URL("../icons/envelope-simple-open-duotone.svg?v=cb9b98f90d2d81ef0813cb0e3d81f5d05a7d916f79169d4334365419ef17a0e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
