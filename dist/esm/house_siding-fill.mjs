export const name="house_siding-fill";
export const id="dl_4a9686be445ee3e564bb";
export const url=new URL("../icons/house_siding-fill.svg?v=237844fd627b28ff82f5a5e00ab40f7b8e563f66b5879496c4a10ecab276b20c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
