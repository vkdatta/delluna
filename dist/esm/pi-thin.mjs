export const name="pi-thin";
export const id="dl_05e3820b83c7474695ab";
export const url=new URL("../icons/pi-thin.svg?v=f74b62395b2760e8614c927581e588b3a5693d28ee74a2680e26880e6f73cf7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
