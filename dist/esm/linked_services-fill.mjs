export const name="linked_services-fill";
export const id="dl_7f0f44345a6c406c94ea";
export const url=new URL("../icons/linked_services-fill.svg?v=1ce773e84d5f4e0b95abc849364d0cc3cefdfe7481f9bc1fcb5f879f90a3497b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
