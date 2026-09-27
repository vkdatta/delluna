export const name="undo-dot";
export const id="dl_8a9ed63fee534c6da385";
export const url=new URL("../icons/undo-dot.svg?v=92cb8569f8a9c37d219e936d463ee277ddbae3ef55c7000863c307173e6bc6cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
