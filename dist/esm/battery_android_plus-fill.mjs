export const name="battery_android_plus-fill";
export const id="dl_a71943837da0468d9f02";
export const url=new URL("../icons/B/battery_android_plus-fill.svg?v=6b6f51d47ef0c299971f098736095e17d8aa6c47657de85a82b4c61a317517d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
