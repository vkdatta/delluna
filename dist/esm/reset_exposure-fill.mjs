export const name="reset_exposure-fill";
export const id="dl_2c96834fb16301bf000d";
export const url=new URL("../icons/reset_exposure-fill.svg?v=1dffa830e72d91e25f10c9c57990262fac2bd553e3d763c7142345eb6d28bcfe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
