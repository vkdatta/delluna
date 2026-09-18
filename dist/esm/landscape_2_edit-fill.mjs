export const name="landscape_2_edit-fill";
export const id="dl_c37cce6b876a4229ae73";
export const url=new URL("../icons/L/landscape_2_edit-fill.svg?v=84e7b7793b96e105afd21ba15c055495ad41dea1976ca0d373ab21a9615cddb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
