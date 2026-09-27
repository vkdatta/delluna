export const name="event_available";
export const id="dl_934927e772e03a50069c";
export const url=new URL("../icons/event_available.svg?v=57ca367660b63d233413c00fa79fb38e7359a92a0465d7968e8b8d4a4f1c6b1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
