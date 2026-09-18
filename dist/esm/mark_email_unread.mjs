export const name="mark_email_unread";
export const id="dl_e04576ed710847f09393";
export const url=new URL("../icons/mark_email_unread.svg?v=a8a99fe7510ce982e2094d2a1e974990df0d5ca9347d8df354f17267667710eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
