export const name="speedometer-fill";
export const id="dl_7b495b60ab797933cbfb";
export const url=new URL("../icons/speedometer-fill.svg?v=e4fd9c5340b278e8969fc681012cb4f02a19ce00c272a8ae6f300ba3315127d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
