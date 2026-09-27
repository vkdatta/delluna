export const name="event-fill";
export const id="dl_362958ba646bb730b339";
export const url=new URL("../icons/event-fill.svg?v=521956e8f145af198deca0106dbadf10568fbc5f7b3c914c398cd9fd7b4e2358",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
