export const name="user-circle-plus-fill";
export const id="dl_61b4d0106c6d8d5a1fb5";
export const url=new URL("../icons/user-circle-plus-fill.svg?v=e56584d25ab11ffcf316f40358ff29666b93766b5195cc315073f496e03397ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
