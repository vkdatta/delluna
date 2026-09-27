export const name="update_disabled-fill";
export const id="dl_2ee31442301c623575f1";
export const url=new URL("../icons/update_disabled-fill.svg?v=a08828e96a0d29235d4531b1cd5996967eb0ba58e0752400cc1c2e2326381fe7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
