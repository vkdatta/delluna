export const name="tab_new_right-fill";
export const id="dl_4cd38e3aa90529bb7611";
export const url=new URL("../icons/tab_new_right-fill.svg?v=53141d4d47dfd9199bee8c3b6c2635d4de68419eb785a2a96d3a6855535bc25b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
