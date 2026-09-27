export const name="tablet-fill";
export const id="dl_08efada7fd6957a5e916";
export const url=new URL("../icons/tablet-fill.svg?v=d9b03b4a644ce99fdce2cb51c1b9a37e22b9092f9a55f52614e78794f48ddec8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
