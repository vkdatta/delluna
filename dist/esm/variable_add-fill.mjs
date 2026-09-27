export const name="variable_add-fill";
export const id="dl_8a8dbc0124efe1995f6a";
export const url=new URL("../icons/variable_add-fill.svg?v=19761e5aed57173b7310b137c11a2d6acf96c1b450dabc8f6112d0123fc17546",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
