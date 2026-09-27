export const name="lucid_3-paperclip";
export const id="dl_72f77282433148ccbaca";
export const url=new URL("../icons/lucid_3-paperclip.svg?v=d75ef4d5ca7f4f12927538d503155505be7d6d4af7efb5856c7ca5c63d9dba09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
