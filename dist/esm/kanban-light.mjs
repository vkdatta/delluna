export const name="kanban-light";
export const id="dl_00a09b9dd60a4c5db533";
export const url=new URL("../icons/kanban-light.svg?v=e7a7f9ee38fbb2ef97aa8fa14f553660e2a092d5336d9d674e7fa5dd0e4dfc3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
