export const name="task-fill";
export const id="dl_5b8bf1ad7a0b413bb864";
export const url=new URL("../icons/task-fill.svg?v=a7e28f25b9f16639ac65932c45b08264a3b8903b069f1c7251efea6f9f63835f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
