export const name="bus_railway";
export const id="dl_3cbccf069b3f3e42aee4";
export const url=new URL("../icons/bus_railway.svg?v=0e61450e0dda4a64936ccb7447bee9e8c7c0f13162230f5c66aef5c0a952d108",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
