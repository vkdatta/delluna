export const name="fire-light";
export const id="dl_7af18bcb2ad749af86b1";
export const url=new URL("../icons/fire-light.svg?v=776001c184dcc8f8342708fcd92d426102ffb48452e1830dc694f0a6c03eba21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
