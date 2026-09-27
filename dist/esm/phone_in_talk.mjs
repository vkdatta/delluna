export const name="phone_in_talk";
export const id="dl_229469f643336be91757";
export const url=new URL("../icons/phone_in_talk.svg?v=5883981a3ce7347d78dc5786ed8b069e24d81c7f5d9a880ee93cf13ada1254dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
