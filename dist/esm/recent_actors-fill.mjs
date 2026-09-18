export const name="recent_actors-fill";
export const id="dl_507a7010a09348fd821a";
export const url=new URL("../icons/R/recent_actors-fill.svg?v=44305ddfdca9045774db48150acff1fdc8559664a6b3b55236c07e31b6fe37c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
