export const name="clock_loader_40-fill";
export const id="dl_f65e064d03a5b97adc7d";
export const url=new URL("../icons/clock_loader_40-fill.svg?v=50e3288d0c32ae714720633459ddaaf1a92fc658f93b6583e8c5d22c1f95a4ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
