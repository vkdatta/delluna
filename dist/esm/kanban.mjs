export const name="kanban";
export const id="dl_b1495dad71694376b3d2";
export const url=new URL("../icons/kanban.svg?v=f3a0131fad04a825e94567cc46d96943256f487c493d8f00ccdd589fa3b6e97e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
