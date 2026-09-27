export const name="tornado";
export const id="dl_e9115d176cc4293df4e8";
export const url=new URL("../icons/tornado.svg?v=b33e89259c03eb2b423b91e9b5f51efaddc2a8364856404e3a2973c25c9ca1c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
