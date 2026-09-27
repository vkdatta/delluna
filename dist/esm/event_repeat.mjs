export const name="event_repeat";
export const id="dl_195ae45cdb73d54f5f7a";
export const url=new URL("../icons/event_repeat.svg?v=cc5f6d40cc8e56f5da8f96bfba3020ea602e65b4fc1beec5831589ac189cb6de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
