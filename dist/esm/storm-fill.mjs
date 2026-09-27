export const name="storm-fill";
export const id="dl_26754babb8b1051d93ca";
export const url=new URL("../icons/storm-fill.svg?v=46f497a41dca30abef0537a7c443fcaf3f55b33aa4acb7298a3685e2d8e0f8ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
