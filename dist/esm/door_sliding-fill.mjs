export const name="door_sliding-fill";
export const id="dl_f8d693d6272510820848";
export const url=new URL("../icons/door_sliding-fill.svg?v=b54c3ba8699d437e0360ec62339677c83b2af58c3c621a3fca108b5556f97c7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
