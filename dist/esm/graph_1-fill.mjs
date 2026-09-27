export const name="graph_1-fill";
export const id="dl_ae62967b77d21adaace4";
export const url=new URL("../icons/graph_1-fill.svg?v=8d0ee27673feb6eeb911d10bc460a87ecc4cb29a41d4bcb6156ac554ac1c0130",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
