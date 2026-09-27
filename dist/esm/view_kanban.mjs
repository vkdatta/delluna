export const name="view_kanban";
export const id="dl_7b1debaf49e60d5642a8";
export const url=new URL("../icons/view_kanban.svg?v=3b767bba2b30b054c51f5f64bcceeebc058f9c88cf39370b508cf05a53847208",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
