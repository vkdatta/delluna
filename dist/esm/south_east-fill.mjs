export const name="south_east-fill";
export const id="dl_66edbbac4612213ef7a6";
export const url=new URL("../icons/south_east-fill.svg?v=ca9cd8fbc2e9763f5c5dedb976e986a7a730a3f2ba1e368e6c734b28fb91ccd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
