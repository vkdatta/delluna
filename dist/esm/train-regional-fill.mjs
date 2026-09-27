export const name="train-regional-fill";
export const id="dl_2d1a00c1ff8ed434337c";
export const url=new URL("../icons/train-regional-fill.svg?v=51aaa427e9b884525da6feea7b7666faad0f087ed251c303390bf7ff61341b3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
