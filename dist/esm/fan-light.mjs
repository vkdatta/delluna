export const name="fan-light";
export const id="dl_b304a558ac9f40809b07";
export const url=new URL("../icons/fan-light.svg?v=3f285343d24bdfcf6ccc35085a0040d417daf24aac2f80a3c745169aa0e8ecf8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
