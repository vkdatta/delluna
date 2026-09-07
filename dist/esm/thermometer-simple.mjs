export const name="thermometer-simple";
export const id="dl_b342ad69b94a4afb9316";
export const url=new URL("../icons/T/thermometer-simple.svg?v=74e3e52fe86518f880c95fc419219225eb888c12bec3a6f08e0dfe4b25eb0d0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
