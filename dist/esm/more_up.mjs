export const name="more_up";
export const id="dl_37e650a25c1cfdcf61e8";
export const url=new URL("../icons/more_up.svg?v=a548e0fdb7d437af84d485ab270a63725a568c66dfc192491a862cf773532477",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
