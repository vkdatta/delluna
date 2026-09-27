export const name="umbrella-simple-light";
export const id="dl_8aaf6d42a029b8063de5";
export const url=new URL("../icons/umbrella-simple-light.svg?v=f2dbfaabe8314dbc7d7f7cb91ee8ff7ce2d25c119d3e00af82792b1567176542",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
