export const name="arrow-square-in-bold";
export const id="dl_225db11f865a4676a0ca";
export const url=new URL("../icons/arrow-square-in-bold.svg?v=c151ab819588734338fa64736793466f66eb948dd3c381eb1847fcdba7bd8c23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
