export const name="user-circle-gear-thin";
export const id="dl_a4d6ffd4f0b41c1fd483";
export const url=new URL("../icons/user-circle-gear-thin.svg?v=36bd2e90a50b2844eff5c4818f938477541ae7f95ab8d8e1bea8ae1e8b806783",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
