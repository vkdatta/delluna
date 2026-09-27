export const name="task-fill";
export const id="dl_af78753382099df0d051";
export const url=new URL("../icons/task-fill.svg?v=11d370c9a72c70debcb8194f8736330ff3d52828f7f28f70b99d9a68479b2197",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
