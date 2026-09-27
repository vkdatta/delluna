export const name="auto_delete-fill";
export const id="dl_0db4df3a6be13d117179";
export const url=new URL("../icons/auto_delete-fill.svg?v=f3975c90d12b63726b41e19ce1799ca2f7196dcc00e65eba3b503481a439f0e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
