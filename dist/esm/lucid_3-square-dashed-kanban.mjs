export const name="lucid_3-square-dashed-kanban";
export const id="dl_4d269de690e045368dfd";
export const url=new URL("../icons/lucid_3-square-dashed-kanban.svg?v=c547980f463c44ebbed1a2b50986c0799bdabc388dcb93a28d969fb63f18d544",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
