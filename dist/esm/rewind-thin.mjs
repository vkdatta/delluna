export const name="rewind-thin";
export const id="dl_d346a13e98c6453fa2e2";
export const url=new URL("../icons/rewind-thin.svg?v=42e63b74ee115b7a8d31c6d464b678124d01ed8762f4c97b246a83c637c3b28f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
