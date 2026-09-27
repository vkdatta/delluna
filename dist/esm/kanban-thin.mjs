export const name="kanban-thin";
export const id="dl_32e8cf52a8764dd4a209";
export const url=new URL("../icons/kanban-thin.svg?v=5b0da5e67cf1201ab1603088925a7d094fb0ab3bdc5ef92d142f24e9e4f30f1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
