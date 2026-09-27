export const name="notification_add-fill";
export const id="dl_f2d222b5e23fb663e181";
export const url=new URL("../icons/notification_add-fill.svg?v=6ad33a477c4968351925b63c4d9b504920a98eb81df5d64dbb4957c8caa7a783",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
