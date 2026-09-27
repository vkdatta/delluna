export const name="kanban";
export const id="dl_b1495dad71694376b3d2";
export const url=new URL("../icons/kanban.svg?v=620cc087d672bfa36d64b60a0e9a5b4bd6bc44a71cef79b6a51e7181a7e8222a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
