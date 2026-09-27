export const name="event_available";
export const id="dl_2549e4f934860847fb9e";
export const url=new URL("../icons/event_available.svg?v=61af907bc206ed9cf30cdb848bf5b6a4a493bdcf826b71d18bff134064c46c34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
