export const name="iframe_off-fill";
export const id="dl_5dea62e8e0a8ee700734";
export const url=new URL("../icons/iframe_off-fill.svg?v=3ba8ddeee38117a3920b14c8fc38a27d38ede3eee2c44e33a020a7aad8bdbb42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
