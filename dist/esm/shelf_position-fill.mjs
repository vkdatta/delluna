export const name="shelf_position-fill";
export const id="dl_48efeeef4a447ab23f65";
export const url=new URL("../icons/shelf_position-fill.svg?v=0bd9d43f947919552be0d3ae8fbea8015ccc2cd2e8f7f0c9ecf4df8196c705e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
