export const name="splitscreen_right-fill";
export const id="dl_9426b0fe9845c37f39c8";
export const url=new URL("../icons/splitscreen_right-fill.svg?v=90f9d958c922a15ba9dd62a177c9cc30f4d2782ec25f84f2d576cd7083c489e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
