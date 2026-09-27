export const name="square-kanban";
export const id="dl_07eccdab53b74a86b7a1";
export const url=new URL("../icons/square-kanban.svg?v=488e004dc4e3238de7d83263b5eaedff8ba2a4981b90d9f960f96167a92c9ea7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
