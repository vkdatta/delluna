export const name="request_quote-fill";
export const id="dl_7ef96774516de71cf0cb";
export const url=new URL("../icons/request_quote-fill.svg?v=f182143d99c00191543fbc9d1754aa99252ee0f507b5a8910abf41be7161213d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
