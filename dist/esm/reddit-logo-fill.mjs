export const name="reddit-logo-fill";
export const id="dl_ee1a188f9cc34e2197e7";
export const url=new URL("../icons/reddit-logo-fill.svg?v=ac2f39a7e8de62f602d5bf89a031cdd4a8da3d3a99ff368d66b204b25a3f18ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
