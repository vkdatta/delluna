export const name="bookmarks-simple-bold";
export const id="dl_ae0dc2924635478bad2b";
export const url=new URL("../icons/bookmarks-simple-bold.svg?v=684fe782e44e6f3d8bd83099dfc7759170ceb1911ec1677a1470501467615ba7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
