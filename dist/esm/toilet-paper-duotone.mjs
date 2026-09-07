export const name="toilet-paper-duotone";
export const id="dl_053d28f9fda34347be17";
export const url=new URL("../icons/T/toilet-paper-duotone.svg?v=df31cb46383368342ef3d480d6049c8ab9ccb90e0f3d49ffdc18388ab74e33b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
