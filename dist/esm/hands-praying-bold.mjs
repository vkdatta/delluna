export const name="hands-praying-bold";
export const id="dl_399890946537422aaa68";
export const url=new URL("../icons/hands-praying-bold.svg?v=65fd33086605ee728860512b6fd911ffccaf991d057c9175621518bfffede6bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
