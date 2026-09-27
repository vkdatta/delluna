export const name="reset_settings";
export const id="dl_b629596e723744bb0f00";
export const url=new URL("../icons/reset_settings.svg?v=00021162c079fed0f830e40f36e5a5524d1bfcd5a10d5b7179ad0ba3f5ada948",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
