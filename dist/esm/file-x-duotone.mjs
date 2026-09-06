export const name="file-x-duotone";
export const id="dl_b6eb7ef288294f0abf25";
export const url=new URL("../icons/file-x-duotone.svg?v=903a87210e38d24b7f3c7cf35dd149c0cd1e82d0629262430ff29a57e6bcfdce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
