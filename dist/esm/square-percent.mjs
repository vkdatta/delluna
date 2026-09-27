export const name="square-percent";
export const id="dl_cb070652859643c7b00b";
export const url=new URL("../icons/square-percent.svg?v=d9356a96fa5b12e1139df667fcd4c8af600e4759fb5f7008088e6cea373a4688",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
