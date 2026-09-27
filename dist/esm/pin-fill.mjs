export const name="pin-fill";
export const id="dl_8083acac7d258352a9ce";
export const url=new URL("../icons/pin-fill.svg?v=4e8b23e96a0af99755fff0aa512fb5626d47a04a5184f5435e297e60b644a237",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
