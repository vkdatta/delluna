export const name="sunny_snowing-fill";
export const id="dl_8a31b635871ef1808f05";
export const url=new URL("../icons/sunny_snowing-fill.svg?v=12c920483e6b49016ed75ea609676a9cc93ff38970bfcb4f00d3429e416a2127",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
