export const name="square-kanban";
export const id="dl_07eccdab53b74a86b7a1";
export const url=new URL("../icons/square-kanban.svg?v=235bb5b1c615f0af48523ccaec6a6e2c3888ac73843ecc86c9d682ef3d7f1b8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
