export const name="lucid_2-folder-kanban";
export const id="dl_8f5086cd7c3440c582e0";
export const url=new URL("../icons/lucid_2-folder-kanban.svg?v=c0110a764ba57d91933b1e09eb903969b41ae7012cc2671843c1e3b005b7093d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
