export const name="van-thin";
export const id="dl_d691e2920db73e6e732c";
export const url=new URL("../icons/van-thin.svg?v=36f82d2fe40dd760d788cc5a94e36e7ab345ff6ba32d5a5d4f3cb94576b7abc5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
