export const name="analytics-fill";
export const id="dl_a204cfe6a06520a10b6e";
export const url=new URL("../icons/analytics-fill.svg?v=91f290e3ca79e568c7e8afde7841c6672a9497c30c34dc096a6ed89d22d006da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
