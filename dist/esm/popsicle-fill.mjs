export const name="popsicle-fill";
export const id="dl_f941a69b47644331ba92";
export const url=new URL("../icons/popsicle-fill.svg?v=c236aff03b9d25615b3eaa87df52c5eec43afabced34cd4e0e1b043014939fe2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
