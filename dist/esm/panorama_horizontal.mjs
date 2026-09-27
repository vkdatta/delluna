export const name="panorama_horizontal";
export const id="dl_9c6dce4ceaefc7088ecd";
export const url=new URL("../icons/panorama_horizontal.svg?v=d23219b0d8449a88780379b909b219bb8247548def67d5d89a1d7b9fb96790fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
