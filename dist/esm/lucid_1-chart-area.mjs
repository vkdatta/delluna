export const name="lucid_1-chart-area";
export const id="dl_438d9679f3ef43ffa61a";
export const url=new URL("../icons/lucid_1-chart-area.svg?v=425349abf61e812a96d43ce4495595d554cad41c18ede9fad0abfae17d77e25c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
