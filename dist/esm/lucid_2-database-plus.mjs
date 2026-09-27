export const name="lucid_2-database-plus";
export const id="dl_fd775598c0fd46d59ed7";
export const url=new URL("../icons/lucid_2-database-plus.svg?v=001aefcd57691b513be595aee66ed226629ace8750f2387d0be08446ab770bce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
