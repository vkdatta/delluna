export const name="difference-fill";
export const id="dl_cb48d1f41c71aa72d4f6";
export const url=new URL("../icons/difference-fill.svg?v=12b67b45c7b843a7d02af9a31493b1a8e7f76165857e89c1e361ee33ba8fdaeb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
