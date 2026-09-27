export const name="dots-six-vertical-fill";
export const id="dl_5a11c4b929704f4885c9";
export const url=new URL("../icons/dots-six-vertical-fill.svg?v=e1de6f90a437c8a20f3232546d67450433457dde08bf08673fd5b55ef6dda60e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
