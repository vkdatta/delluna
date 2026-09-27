export const name="flight";
export const id="dl_7551c14dba88fa5b9c87";
export const url=new URL("../icons/flight.svg?v=67c3307c09ca4b44c6a52a431b9bf1e999095d3f6558ffffd56e938e78b80010",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
