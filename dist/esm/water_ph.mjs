export const name="water_ph";
export const id="dl_7e50023931b07df3aaec";
export const url=new URL("../icons/water_ph.svg?v=c86901978fce115b7ead9b29ae6bba1debbdf32fc5781fc36158a92246c57901",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
