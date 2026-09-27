export const name="volcano-fill";
export const id="dl_76557dcc0e8f4ba692b6";
export const url=new URL("../icons/volcano-fill.svg?v=62f528c7b03da9f47784262e1ca1c19cf79df27b62967587c183f3cb9da79b5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
