export const name="recycle-bold";
export const id="dl_ebe7a249ee25483d978a";
export const url=new URL("../icons/recycle-bold.svg?v=31746e59fe700c5639eec8f360d5da6371e719b7c2ac8598b9a7429db6c393df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
