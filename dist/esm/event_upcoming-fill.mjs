export const name="event_upcoming-fill";
export const id="dl_fbe4697b4217baaf0a6e";
export const url=new URL("../icons/event_upcoming-fill.svg?v=3b15a33663437886bb93b61d1cb0cef92568c304fa6a1bc1c93d51738ac17093",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
