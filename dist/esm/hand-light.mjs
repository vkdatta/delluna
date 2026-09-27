export const name="hand-light";
export const id="dl_9bed9def420148f5a555";
export const url=new URL("../icons/hand-light.svg?v=27e8cef2a2d48efa1781957c28c21fa6eca5674c21d92c904254baa31003017c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
