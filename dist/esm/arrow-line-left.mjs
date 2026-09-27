export const name="arrow-line-left";
export const id="dl_8127702795d74ec38bb2";
export const url=new URL("../icons/arrow-line-left.svg?v=89eacc5e07f64df438d11faa28023ff5a48bafe0fa87b0691cba40a5a5334358",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
