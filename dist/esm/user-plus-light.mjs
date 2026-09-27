export const name="user-plus-light";
export const id="dl_100d134db3b4dfc2b70d";
export const url=new URL("../icons/user-plus-light.svg?v=61168ace6f03d6cacc5582dbb8840a23cebcb2ed4e03c29feb505c05ef7e9c80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
