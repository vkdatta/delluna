export const name="sports_rugby-fill";
export const id="dl_0abcdb51a1108ecd5f5a";
export const url=new URL("../icons/sports_rugby-fill.svg?v=d362a3584ef629673552afb4566e7ffddaa85940877961b83fc9d00a80fe9147",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
