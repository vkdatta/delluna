export const name="arrow_top_left-fill";
export const id="dl_fd9c758d982c8ba2ab07";
export const url=new URL("../icons/arrow_top_left-fill.svg?v=608dc14d442c554dacd650de8e01ee2b58b686f57ec03c4765031c1667731884",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
