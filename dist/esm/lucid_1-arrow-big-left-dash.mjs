export const name="lucid_1-arrow-big-left-dash";
export const id="dl_c1a016b2b00340a8a78b";
export const url=new URL("../icons/lucid_1-arrow-big-left-dash.svg?v=24d84d8620a58faa01e5c044c73ae63adad0073b619173955b6c724393996753",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
