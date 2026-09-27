export const name="assignment_globe";
export const id="dl_4f12aca83dd8d55729d3";
export const url=new URL("../icons/assignment_globe.svg?v=589bceaca7761d661b11dfd15a6f6e7d532f378a26579672f46836500f7e3673",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
