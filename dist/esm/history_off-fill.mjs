export const name="history_off-fill";
export const id="dl_21ec61918360579c10b8";
export const url=new URL("../icons/history_off-fill.svg?v=d96b05fc2067615307ea3decfc9c911b1a83d1036b9d98af4c5740eef6cfd622",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
