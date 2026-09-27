export const name="user-square-thin";
export const id="dl_fa4ea5fe96f407f98653";
export const url=new URL("../icons/user-square-thin.svg?v=e12f8508aac3ae6ea43f41725181eddc5b588767dea1d73c7207e16840258fb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
