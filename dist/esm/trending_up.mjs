export const name="trending_up";
export const id="dl_861865b8d7e3dfd92a6d";
export const url=new URL("../icons/trending_up.svg?v=f14a02ffe7df2104e9aca51b56fb4c8a7b780f671fb5d6ec36b7cf60c0b59cf6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
