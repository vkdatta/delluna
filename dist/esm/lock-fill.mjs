export const name="lock-fill";
export const id="dl_e2963a686ac26c43356a";
export const url=new URL("../icons/lock-fill.svg?v=6c40a17cee0a58243fb1003b376b09d5146f5eef1118d7bb4cee2ecdf31e4165",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
