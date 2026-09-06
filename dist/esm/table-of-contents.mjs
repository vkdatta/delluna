export const name="table-of-contents";
export const id="dl_225e0e8df4b74f339430";
export const url=new URL("../icons/table-of-contents.svg?v=a9543b308b2fbf642d3689970d94d6266eb95aacfaf3216a575f627cff24b0c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
