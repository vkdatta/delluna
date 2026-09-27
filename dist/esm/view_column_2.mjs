export const name="view_column_2";
export const id="dl_f9bfb1345563a89828b6";
export const url=new URL("../icons/view_column_2.svg?v=1000e9af60fafd4cedbf81113dc8bfc82bc8f5c41a7b58d927036394c7ba44d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
