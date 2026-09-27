export const name="undereye-fill";
export const id="dl_9e391f232563ce94815a";
export const url=new URL("../icons/undereye-fill.svg?v=89b3a1ce4a69fc4c00880b4bfda479aac15038e56d0a974c528e054a3e4ca25c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
