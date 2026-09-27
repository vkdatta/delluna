export const name="charging-station-bold";
export const id="dl_71070ee7e4574b23ba21";
export const url=new URL("../icons/charging-station-bold.svg?v=3888f76325df05845ab201f4bc8a466e7861907d0f3fcd2e0bb4e2acfa682945",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
