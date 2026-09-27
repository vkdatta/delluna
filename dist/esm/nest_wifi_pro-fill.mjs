export const name="nest_wifi_pro-fill";
export const id="dl_083b5266b1056fac0ddb";
export const url=new URL("../icons/nest_wifi_pro-fill.svg?v=b3c03e261252868e9b14e36670c2b3b15704182ff8f03faa8715a2695a7f9b54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
