export const name="toilet";
export const id="dl_1d6562ec993342d8b5fe";
export const url=new URL("../icons/toilet.svg?v=715432723e7b504484eb6de70eff33b4f88ecdf62c5b32f0769e819a616919c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
