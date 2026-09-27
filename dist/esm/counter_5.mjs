export const name="counter_5";
export const id="dl_27b544b50b52f12848f3";
export const url=new URL("../icons/counter_5.svg?v=20b6a4d952c00d4f413b137a2feaa9981fa21857461a08e1036f745c4fc96a30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
