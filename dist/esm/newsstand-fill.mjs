export const name="newsstand-fill";
export const id="dl_5c906241d85e40058d12";
export const url=new URL("../icons/newsstand-fill.svg?v=33e96383f4eaa7cdd43e757a85bf1ac8b59d91bf8e2101ff1906fd0d326cfdd4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
