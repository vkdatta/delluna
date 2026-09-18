export const name="ballot";
export const id="dl_5d9a9940b30446dfaf9a";
export const url=new URL("../icons/ballot.svg?v=24ca57bcb72da3dde93ff867321e2c7f726fb6bf6aa8e64bac43d5168a9eddf0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
