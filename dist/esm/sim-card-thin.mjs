export const name="sim-card-thin";
export const id="dl_7406e7373f62385b63f0";
export const url=new URL("../icons/sim-card-thin.svg?v=473edb4343433f74f813d4e49130714987db5960efab6f1abdab3cb6852be546",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
