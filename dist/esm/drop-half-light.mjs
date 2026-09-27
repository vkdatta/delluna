export const name="drop-half-light";
export const id="dl_e5ac5dedfc8f4dbc9a31";
export const url=new URL("../icons/drop-half-light.svg?v=b53a660bee26eb5a3a029a19818177cfacf783bfbcce546f66d3753af93099cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
