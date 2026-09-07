export const name="tornado";
export const id="dl_81e8dd2249604db399ff";
export const url=new URL("../icons/T/tornado.svg?v=b33e89259c03eb2b423b91e9b5f51efaddc2a8364856404e3a2973c25c9ca1c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
