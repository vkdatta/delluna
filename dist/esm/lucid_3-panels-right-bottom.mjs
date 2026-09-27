export const name="lucid_3-panels-right-bottom";
export const id="dl_eca2b1a7179e4bd7a2b1";
export const url=new URL("../icons/lucid_3-panels-right-bottom.svg?v=1cc347f93883994dbfeeaed032bd4b19989167c91d807aee06be8db927e3ef87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
