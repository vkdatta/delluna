export const name="lock-key-open-thin";
export const id="dl_3bdf9ca316a14526bade";
export const url=new URL("../icons/lock-key-open-thin.svg?v=44bdd1855aacbf82c161a773c1cba5be8e65be0e9c4b47e5308c057ec7a7edae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
