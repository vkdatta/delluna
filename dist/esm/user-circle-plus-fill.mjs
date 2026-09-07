export const name="user-circle-plus-fill";
export const id="dl_56b573c853ab432a88fc";
export const url=new URL("../icons/U/user-circle-plus-fill.svg?v=e56584d25ab11ffcf316f40358ff29666b93766b5195cc315073f496e03397ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
