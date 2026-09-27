export const name="folder_data";
export const id="dl_9b3ce04a87f10dc304d9";
export const url=new URL("../icons/folder_data.svg?v=1f5429b89b7b370f8024cea76e8524d273d1be29f1769e130827e1262ee2f541",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
