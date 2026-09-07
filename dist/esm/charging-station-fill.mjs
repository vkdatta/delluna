export const name="charging-station-fill";
export const id="dl_131a921fe6274ef581b0";
export const url=new URL("../icons/charging-station-fill.svg?v=5aa297948fa7e1ac4b61910cc29613f1b5c2746caa57219c8d5d3c415286bf51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
