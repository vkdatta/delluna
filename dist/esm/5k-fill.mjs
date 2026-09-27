export const name="5k-fill";
export const id="dl_57095277ec391eea2783";
export const url=new URL("../icons/5k-fill.svg?v=4b04035c427eadaef6a1947d84a3217f690e92d0b48356d5bdc7073aefe664d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
