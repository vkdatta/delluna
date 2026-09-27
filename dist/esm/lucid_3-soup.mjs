export const name="lucid_3-soup";
export const id="dl_d436fd63b23a4f62a3b7";
export const url=new URL("../icons/lucid_3-soup.svg?v=46bf519cd30bf92a571c640461b5875f5fc379413dd13dedd6a53799b0b13cc6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
