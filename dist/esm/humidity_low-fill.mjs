export const name="humidity_low-fill";
export const id="dl_d79c723131257bba9161";
export const url=new URL("../icons/humidity_low-fill.svg?v=3eeff37c1ba60d8e79d7bdf62683ccf9590b94391da9a52dbabe3fb265e1f74e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
