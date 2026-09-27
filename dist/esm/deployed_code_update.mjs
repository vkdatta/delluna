export const name="deployed_code_update";
export const id="dl_ba85fc47e7c34e056739";
export const url=new URL("../icons/deployed_code_update.svg?v=ca4bac5d69446cebbe3a357b4b8bb5095359b71acbaef95cf4bf3557b850b72d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
