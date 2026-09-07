export const name="file-txt-light";
export const id="dl_20c1878074a045a581c8";
export const url=new URL("../icons/file-txt-light.svg?v=b82cceb5c3761aecc36b5e3baa0e745644311eb8432a72f0b1b06d257b6fc5ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
