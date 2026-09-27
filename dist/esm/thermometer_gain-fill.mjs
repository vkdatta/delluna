export const name="thermometer_gain-fill";
export const id="dl_58b16b38aaa27ea4ce45";
export const url=new URL("../icons/thermometer_gain-fill.svg?v=4bc662b1f33cc65e7e42bdc422353a2b94c0730a3ba56b86b647f7864c8e16e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
