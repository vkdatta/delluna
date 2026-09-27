export const name="flag-banner-fold-fill";
export const id="dl_e2579167ed1342819bda";
export const url=new URL("../icons/flag-banner-fold-fill.svg?v=a06176b74bb4750f7194ad0da41e65790a6f9ac12355ce535ac842226d37bac8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
