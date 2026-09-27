export const name="boat-light";
export const id="dl_f00e9f46c05a48faa297";
export const url=new URL("../icons/boat-light.svg?v=61eaa8381153947589398c74253eb2cf7347119e664bd11d88170f5179cb2ab8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
