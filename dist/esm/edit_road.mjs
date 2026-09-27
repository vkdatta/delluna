export const name="edit_road";
export const id="dl_5fb06a66113387b20d61";
export const url=new URL("../icons/edit_road.svg?v=ed461b54fcedfead513ec5284719cd18cf03f4bb034bc722a360be036c5c97af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
