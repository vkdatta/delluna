export const name="fit_page_height";
export const id="dl_9e3a002633dec0fe5271";
export const url=new URL("../icons/fit_page_height.svg?v=c04dee23a9fb306d3b136e3512a6a4c911c10b966175267a9b5875e6d177791b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
