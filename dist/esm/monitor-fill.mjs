export const name="monitor-fill";
export const id="dl_e88ea33368c849449386";
export const url=new URL("../icons/monitor-fill.svg?v=d1d48b15408c8d6df81512deb8a03b6aabe208b9b0f9cad12b0533ecea5a3c25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
