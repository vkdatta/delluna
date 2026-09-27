export const name="near_me";
export const id="dl_6ff169de3f52564f4102";
export const url=new URL("../icons/near_me.svg?v=e92e0f48734a04808e7be88ff8a61405f682aca92aa9b35eaece7577a1597049",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
