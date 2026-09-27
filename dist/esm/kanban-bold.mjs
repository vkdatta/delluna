export const name="kanban-bold";
export const id="dl_11d2754d038e461cb9b5";
export const url=new URL("../icons/kanban-bold.svg?v=7794dd5c00e52562f430e04a956699b9791184b7b43f93c233fedd01e0659843",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
