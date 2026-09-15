export const name="event_seat-fill";
export const id="dl_1d2cad437bc04ce8a848";
export const url=new URL("../icons/E/event_seat-fill.svg?v=90ef4e573ce8bf0a1567db4a976f0c6d962b59587ce24613c0c78c0d4034ddb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
