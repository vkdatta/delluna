export const name="add_column_left";
export const id="dl_bc9336a5c75ac2300a41";
export const url=new URL("../icons/add_column_left.svg?v=fe9354601400b68e38480cd0711424843810df353f1627b496356e492973b6a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
