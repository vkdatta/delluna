export const name="space_dashboard";
export const id="dl_5beb17dfafe87b93d28f";
export const url=new URL("../icons/space_dashboard.svg?v=75201ecaa05aaf342bf1a3acb4bd86116ec36a228e69e73500515b2a36d5ee9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
