export const name="reply_all-fill";
export const id="dl_114341cb0465ed23666b";
export const url=new URL("../icons/reply_all-fill.svg?v=6a3641963e2badd76a2cf3e406dc758167b4d8cb4f9bd4d2bc130ed32608eef2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
