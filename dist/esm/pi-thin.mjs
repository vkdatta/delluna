export const name="pi-thin";
export const id="dl_05e3820b83c7474695ab";
export const url=new URL("../icons/pi-thin.svg?v=4b991427ca38e51654faeb0f9c62e1dd6dedbbd4b0e8aa3f53ea51711414ea7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
