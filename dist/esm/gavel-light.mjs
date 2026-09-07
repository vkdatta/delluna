export const name="gavel-light";
export const id="dl_940988ee598d4d7aa7d2";
export const url=new URL("../icons/gavel-light.svg?v=a13a2376021016049d10554f49fd6b59e19e28d589267ab6c3e9d1a5e3722aff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
