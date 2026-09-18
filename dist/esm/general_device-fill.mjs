export const name="general_device-fill";
export const id="dl_ee9d75ba24f14e5eb48d";
export const url=new URL("../icons/G/general_device-fill.svg?v=d57097ff5636ad8fbc5084ce53520da46563587a62286199f18a5388a8a16e0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
