export const name="watch-duotone";
export const id="dl_309a77d671494658b10f";
export const url=new URL("../icons/W/watch-duotone.svg?v=5df6063d77195f671fce1caf87eb663aa405eefda7ddce42d05d10f0c3ed3afe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
