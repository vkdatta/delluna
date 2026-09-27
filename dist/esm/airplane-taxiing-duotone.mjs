export const name="airplane-taxiing-duotone";
export const id="dl_bdbadb67b0444dcf8c34";
export const url=new URL("../icons/airplane-taxiing-duotone.svg?v=1f638d380fcc1293efb97f884cb88a091f52c84c78025ba2349e72012d744a37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
