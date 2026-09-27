export const name="lucid_1-alarm-clock-plus";
export const id="dl_82431a13d5b64b91b2d3";
export const url=new URL("../icons/lucid_1-alarm-clock-plus.svg?v=7432908f30c4a33c99dea74d0fa772d97c936f5ca8c01973eb12ca14cff24af2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
