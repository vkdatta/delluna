export const name="engine";
export const id="dl_dab7a2f7bc294a2ca865";
export const url=new URL("../icons/engine.svg?v=3c8649ca47f39f78678e7d8202c494744409fe5cb23ebeaa33ccdbb469fefe30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
