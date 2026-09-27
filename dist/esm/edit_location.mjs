export const name="edit_location";
export const id="dl_60c2ff24fc46dc79648f";
export const url=new URL("../icons/edit_location.svg?v=b7dbed106a1ac4e64aeadd3429a2f8db48ebefb45ead1a9f47cb489c1a2e1784",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
