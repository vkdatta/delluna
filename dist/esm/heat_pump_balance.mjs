export const name="heat_pump_balance";
export const id="dl_8e71a833996a470581ab";
export const url=new URL("../icons/H/heat_pump_balance.svg?v=5d6219ccfb9f28dedb090b1bbaecb3f5cd68bcea0dc080bc98ef30ad9f8b3229",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
