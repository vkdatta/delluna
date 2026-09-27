export const name="lucid_1-align-end-horizontal";
export const id="dl_3acbbc50e2cc4a2789bb";
export const url=new URL("../icons/lucid_1-align-end-horizontal.svg?v=6ac28748685c114a40e3145216bf7e2cb88cfbed8faf800a0a3e841b01133a02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
