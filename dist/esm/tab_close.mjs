export const name="tab_close";
export const id="dl_ccf3c709de3bd4501a88";
export const url=new URL("../icons/tab_close.svg?v=a53f77bc7ee34303fff7c63dde9b4bab439d32cc9f7e1a743b90f44a5f82068c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
