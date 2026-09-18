export const name="bar_chart-fill";
export const id="dl_6f43539c784e44d0ade6";
export const url=new URL("../icons/bar_chart-fill.svg?v=0fa11516c46be6b1c7b9f160506da0166faaf08ac7440542e23e415379ddb85b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
