export const name="waves-bold";
export const id="dl_21b034b2acd6433611c4";
export const url=new URL("../icons/waves-bold.svg?v=459a387889a996f05d79b9b1d40f253f3bd7c0725a5945cbb1fbbf9b14b9f1de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
