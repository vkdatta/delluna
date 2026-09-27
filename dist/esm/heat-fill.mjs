export const name="heat-fill";
export const id="dl_b16c6750856bc70b117a";
export const url=new URL("../icons/heat-fill.svg?v=cb3032d0b3dd85de74055c93db2740422f80527fd4eeec7d150857f206bf31ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
