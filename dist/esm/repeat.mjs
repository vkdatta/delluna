export const name="repeat";
export const id="dl_f6c727b643144080b6ba";
export const url=new URL("../icons/repeat.svg?v=12cef5f8ba7074921f909838088154a6847b936b11342c28daa475c62b71df86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
