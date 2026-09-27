export const name="rice_bowl-fill";
export const id="dl_7f64ee3d492da4b8c80c";
export const url=new URL("../icons/rice_bowl-fill.svg?v=80191046076a7f31557371acea43df3c42a6d1f52fc8fb4428bb1bba009c882c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
