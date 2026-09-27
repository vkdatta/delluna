export const name="sun-horizon-light";
export const id="dl_53dbc8b354e41426c242";
export const url=new URL("../icons/sun-horizon-light.svg?v=648c4ff1b9cc59ac2e2a937df7b680371d510f96c552f186df51f4d451237cf4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
