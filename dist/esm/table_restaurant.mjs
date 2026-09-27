export const name="table_restaurant";
export const id="dl_ed87942ca7be7b1ea096";
export const url=new URL("../icons/table_restaurant.svg?v=d0c80e08e35dd12a56fe11e4900c1dfade5241ef39a4f89b1ce20a4ba7f7ff22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
