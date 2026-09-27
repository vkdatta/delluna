export const name="suitcase-thin";
export const id="dl_00a3cdf72c54fbef39c7";
export const url=new URL("../icons/suitcase-thin.svg?v=3f67d47eb95e5e59d3a7e455407377586008d10da8ed63b13813fb969aefb4eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
