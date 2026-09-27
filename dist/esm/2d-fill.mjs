export const name="2d-fill";
export const id="dl_e83ae5ff143bdb596cdc";
export const url=new URL("../icons/2d-fill.svg?v=fade05bfff2ed8d4f9bbe537c8b80cf53126e240e835b92d600a5e42d2722ef7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
