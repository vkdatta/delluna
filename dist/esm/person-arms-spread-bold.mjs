export const name="person-arms-spread-bold";
export const id="dl_fbbb898c1b8e4d38bfcf";
export const url=new URL("../icons/person-arms-spread-bold.svg?v=2e537ef10e3b99979c28298c9fc74a66139bc91dcf8188af9976408c1383095c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
