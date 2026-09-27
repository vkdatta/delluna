export const name="folder-simple-lock";
export const id="dl_2c9754e20c354f3bba95";
export const url=new URL("../icons/folder-simple-lock.svg?v=7db100580f8c4dacb61009b4885070635810dffdab9debe568dc65d29252e8d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
