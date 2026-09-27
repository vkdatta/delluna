export const name="toilet-duotone";
export const id="dl_9eba859c1b2462ba6ef9";
export const url=new URL("../icons/toilet-duotone.svg?v=aae285848e7d85727504d488b094073cb923c5b17d2f1594d00f8387539fb6fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
