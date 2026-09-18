export const name="not_accessible_forward-fill";
export const id="dl_16ccf8342a674fefbb1b";
export const url=new URL("../icons/not_accessible_forward-fill.svg?v=2efbeb8aed5a393df9cbb4d4eca4e42990bc4b769adc21bcfeb58c45022e026a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
