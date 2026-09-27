export const name="wb_twilight_2-fill";
export const id="dl_1cfcb9eb89a170fe2088";
export const url=new URL("../icons/wb_twilight_2-fill.svg?v=77c9f1a020f35a79039e07e6e6911d56bba101ddd60f58f7a16b2097e9f6b178",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
