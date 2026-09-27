export const name="rainy-fill";
export const id="dl_b777136cbfab63ddea48";
export const url=new URL("../icons/rainy-fill.svg?v=b7388620643fe860ebdda635c079b847ae6e357bca3b273cf9bd2d3679451e1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
