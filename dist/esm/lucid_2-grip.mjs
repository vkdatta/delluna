export const name="lucid_2-grip";
export const id="dl_21cc8c3de46343a9853c";
export const url=new URL("../icons/lucid_2-grip.svg?v=bbda146a6be31c30a512f05e2a4d1053d902faa36cba305c5702dd115089d118",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
