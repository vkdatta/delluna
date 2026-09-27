export const name="local_activity";
export const id="dl_5977e60aecf45218af4c";
export const url=new URL("../icons/local_activity.svg?v=624ea57b719a4ce298edbcba6db115034c90e85f9e9fecce8a1e96a4af2ab704",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
