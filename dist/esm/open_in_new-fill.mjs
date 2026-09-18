export const name="open_in_new-fill";
export const id="dl_11d154e7977247c19bcb";
export const url=new URL("../icons/O/open_in_new-fill.svg?v=61b8f029f16e25e6154192b5e96984314a30b08900603428b9bb2d4f1ded5705",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
