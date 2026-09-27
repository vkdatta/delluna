export const name="solo_dining";
export const id="dl_37867b81c2e212d8339e";
export const url=new URL("../icons/solo_dining.svg?v=468031832216562dbd8ea3e48cade83337a70f61ef45bcde4e03237bca974fd3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
