export const name="text-b-duotone";
export const id="dl_926752466e70ee7479ff";
export const url=new URL("../icons/text-b-duotone.svg?v=b4aa7da6944cabe106531825d50b0758ff05e8dd2b0e21dc2610d230aa292ae9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
