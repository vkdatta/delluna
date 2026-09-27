export const name="event_upcoming";
export const id="dl_b807889fdb988b7ab715";
export const url=new URL("../icons/event_upcoming.svg?v=f8a951f7cc74b5eed6f5ad4fddbe4dda98e4457aa43b02bd2921998e83995f7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
