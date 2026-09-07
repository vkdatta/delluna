export const name="calendar-check-fill";
export const id="dl_245ba2370f06448fa124";
export const url=new URL("../icons/calendar-check-fill.svg?v=c909c63250bcc14bebc692e5ed1db6d295cbb1afa88b7a86b234741c2a1fa274",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
