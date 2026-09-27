export const name="framer-logo-bold";
export const id="dl_abdf2baea44f40d29ff7";
export const url=new URL("../icons/framer-logo-bold.svg?v=f397cdf56bffc8d197448aed6217f02635e38c472ee24ff17d0330d7a0fa4450",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
