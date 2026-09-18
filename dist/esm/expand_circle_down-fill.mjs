export const name="expand_circle_down-fill";
export const id="dl_b8e2c676ec974dd49884";
export const url=new URL("../icons/expand_circle_down-fill.svg?v=4fa3def124e486dbfc058a101918fddb0efe1f240904c892e9dafd4773da1f04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
