export const name="tilde-bold";
export const id="dl_1268a0bbceef4fa5ab69";
export const url=new URL("../icons/T/tilde-bold.svg?v=59cbc80ded225d28f32bc3b47384b4d9ff74a40ff1b8a63ed05e387dd4465992",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
