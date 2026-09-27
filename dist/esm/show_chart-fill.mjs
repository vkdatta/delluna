export const name="show_chart-fill";
export const id="dl_2be84edd6065ff4d1be3";
export const url=new URL("../icons/show_chart-fill.svg?v=651ef06b058b4b6308a0bfee2696493bfca6bf8935349703f5d50485dd67049b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
