export const name="sports_basketball-fill";
export const id="dl_03a31325b607d5165267";
export const url=new URL("../icons/sports_basketball-fill.svg?v=49fa723c8fd15e7e74ab9d3ba21ae1f328b99883b5a37eb75dc748d7e204c7c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
