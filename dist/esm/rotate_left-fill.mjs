export const name="rotate_left-fill";
export const id="dl_e58512ed57d560a6ba0d";
export const url=new URL("../icons/rotate_left-fill.svg?v=d841aa50b526c628990d427a4fed51b7aae9b1ff83cb2e8a59456892423f5abf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
