export const name="user";
export const id="dl_733c16b0b3f245c78a03";
export const url=new URL("../icons/user.svg?v=3f7e4ca469d1933976e9ba8221b24c23668f3e35513763ae5cd1705a9b73cb9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
