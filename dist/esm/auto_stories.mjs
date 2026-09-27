export const name="auto_stories";
export const id="dl_5a1fe4e198ddde448246";
export const url=new URL("../icons/auto_stories.svg?v=e7dec102f751a30096db18b6cbb596f849b200c434a1344ad7f2c5b53678df79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
