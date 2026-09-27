export const name="caret-double-right";
export const id="dl_f6957b87bd0c4be69780";
export const url=new URL("../icons/caret-double-right.svg?v=8075cb874a3581043f17c49acf84cd14bb99655d2cea0374e37dea6c314c7c76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
