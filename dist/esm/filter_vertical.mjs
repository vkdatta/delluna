export const name="filter_vertical";
export const id="dl_39e7c1ab10b105964cee";
export const url=new URL("../icons/filter_vertical.svg?v=3897395e5f2e8e65bd10fe3ed406a7555222fdbb2adf62ab1084708711cc5ade",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
