export const name="developer_guide-fill";
export const id="dl_7d7999abd1ce6c6a70b7";
export const url=new URL("../icons/developer_guide-fill.svg?v=92c9c896a3f3b845561e3515efb4aff0f889e757034511a43a6c1bc7de5d6a31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
