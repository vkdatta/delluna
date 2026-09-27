export const name="funnel-simple-x-bold";
export const id="dl_ed9284f77c93495e86c0";
export const url=new URL("../icons/funnel-simple-x-bold.svg?v=6e18e2ab40565e7370bb562b05d62272df2b62b37d452a1910dfe23d10193091",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
