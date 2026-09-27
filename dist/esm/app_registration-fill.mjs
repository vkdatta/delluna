export const name="app_registration-fill";
export const id="dl_0750970faa2cbede266f";
export const url=new URL("../icons/app_registration-fill.svg?v=50cdda67678ee1a9fd7f1cbf322667094896d89a94e364ff40e17a936cedc47d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
