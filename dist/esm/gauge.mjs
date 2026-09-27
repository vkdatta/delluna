export const name="gauge";
export const id="dl_2c6bfae0d1074231b09a";
export const url=new URL("../icons/gauge.svg?v=b2854af7f24880c4e72b1e5fda82f138252dcc03f1a612792d0e1c7cbb24a5f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
