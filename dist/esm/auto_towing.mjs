export const name="auto_towing";
export const id="dl_1ba5e7275f357ad56c52";
export const url=new URL("../icons/auto_towing.svg?v=fff2dba7ba8a1394dd9c101be1f99f92cffc7e951b9c0ebfee268570ea1a44b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
