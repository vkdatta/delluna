export const name="lucid_2-kanban";
export const id="dl_4ec44e17861f4b5dbf89";
export const url=new URL("../icons/lucid_2-kanban.svg?v=668c7d57a68ec815eca05697a7aad3cc17425477674364086938776fd6dd0190",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
