export const name="flag-banner-fold-bold";
export const id="dl_5b29bdcc9bfe4eb5a338";
export const url=new URL("../icons/flag-banner-fold-bold.svg?v=625093a4e3f14e38d41676241490e7e8eea11e8e119e11d58da3f2e43c6dfe97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
