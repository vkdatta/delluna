export const name="align-left-simple-fill";
export const id="dl_6e32113b3211494cbc54";
export const url=new URL("../icons/align-left-simple-fill.svg?v=131ed7cc52f97420965a96f7a3d3275e623175651ed5444a50c818d2c4830fc5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
