export const name="lucid_1-beef-off";
export const id="dl_a2ddcda247f541dd8f04";
export const url=new URL("../icons/lucid_1-beef-off.svg?v=832e9c812446da308730a9ccf4e286b7a9811b76850dc799e5d267db8ec4a3e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
