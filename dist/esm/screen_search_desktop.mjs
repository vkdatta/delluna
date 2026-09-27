export const name="screen_search_desktop";
export const id="dl_17ecc61b5962d4440716";
export const url=new URL("../icons/screen_search_desktop.svg?v=ac211c30cc5bc7eef09eb7a4361ceb56437335c2b3c7120566296fc2be5c5e05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
