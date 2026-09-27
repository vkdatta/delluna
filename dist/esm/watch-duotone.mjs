export const name="watch-duotone";
export const id="dl_4cda66c5283f19e3c5c3";
export const url=new URL("../icons/watch-duotone.svg?v=5df6063d77195f671fce1caf87eb663aa405eefda7ddce42d05d10f0c3ed3afe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
