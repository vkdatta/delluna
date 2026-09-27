export const name="hand-arrow-down-light";
export const id="dl_c74e8cdc3e7649a3afee";
export const url=new URL("../icons/hand-arrow-down-light.svg?v=a92688950ceea142a133eb2b8833a0bbcb38ec623ef175409232179f06770f43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
