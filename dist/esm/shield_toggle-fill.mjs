export const name="shield_toggle-fill";
export const id="dl_c1269931bf437860ac14";
export const url=new URL("../icons/shield_toggle-fill.svg?v=c5179be6ac989f637ca4701441dc697da7abfd2e2982b69e3ed2e743e249061d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
