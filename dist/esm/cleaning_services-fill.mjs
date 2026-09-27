export const name="cleaning_services-fill";
export const id="dl_16a2981e08e9d6e0fe3d";
export const url=new URL("../icons/cleaning_services-fill.svg?v=671b63ee2a8e9798c87434ace5982fef836972105c789f834a1397a0e3effc99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
