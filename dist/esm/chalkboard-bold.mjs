export const name="chalkboard-bold";
export const id="dl_fa23dc4e5cd74333b5a0";
export const url=new URL("../icons/chalkboard-bold.svg?v=e90c546019cd8544a10b12dea343dce8ec01baea859c547b4ac1d6d50f589440",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
