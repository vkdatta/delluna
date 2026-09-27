export const name="armchair-thin";
export const id="dl_cdb57910d98d47619504";
export const url=new URL("../icons/armchair-thin.svg?v=e9e97e260cb528c890e5910dcdcc4bb56352dec7c4b0e79079329b4404444d08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
