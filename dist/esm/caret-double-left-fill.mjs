export const name="caret-double-left-fill";
export const id="dl_9ee18b61c9924c089d52";
export const url=new URL("../icons/caret-double-left-fill.svg?v=d3afce888edeecbe2ade03f9f66b43943726d68638c0265c8fffda7cadd9493a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
