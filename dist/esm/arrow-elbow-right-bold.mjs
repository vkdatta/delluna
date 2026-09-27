export const name="arrow-elbow-right-bold";
export const id="dl_7c718c0cfd6546c38fa7";
export const url=new URL("../icons/arrow-elbow-right-bold.svg?v=c4793a447902ee05dd700dbb2b1855f03898b7d020646dcf0d2cdd5fbefc2835",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
