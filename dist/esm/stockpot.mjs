export const name="stockpot";
export const id="dl_f09019ec68eba06e3275";
export const url=new URL("../icons/stockpot.svg?v=c394bf8901e9efd2b9224c3e515ed5b2faf876e7f0feec4ca941a2a4c44cdeb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
