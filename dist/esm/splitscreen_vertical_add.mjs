export const name="splitscreen_vertical_add";
export const id="dl_608bc1fe66ac4716b5ca";
export const url=new URL("../icons/S/splitscreen_vertical_add.svg?v=ece0c141ba2aa36b791234ecf7173397e2b55df4f6e0c66029314e8984cbf37c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
