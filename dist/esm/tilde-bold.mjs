export const name="tilde-bold";
export const id="dl_713d27b268f73fa9f74a";
export const url=new URL("../icons/tilde-bold.svg?v=d9f069fb8acc99b41fb9fa4df4aefc4802a8ead4805b64f507001805cef883d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
