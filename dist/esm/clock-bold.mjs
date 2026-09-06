export const name="clock-bold";
export const id="dl_2c896565bea64c599987";
export const url=new URL("../icons/clock-bold.svg?v=45cf8bb6e1929b4d7fcbf52d83b35c6d130f4ea12d981db19370392cba724f4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
