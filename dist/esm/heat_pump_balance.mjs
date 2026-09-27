export const name="heat_pump_balance";
export const id="dl_1b666609f678f8cbe51d";
export const url=new URL("../icons/heat_pump_balance.svg?v=499e3d5b44802660987925484971cebdc26ba77e9deaa6cec39c299cab20c2bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
