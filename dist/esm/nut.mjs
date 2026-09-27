export const name="nut";
export const id="dl_a893abadf2b847598b21";
export const url=new URL("../icons/nut.svg?v=b6db781daa1d9b94ff71fc1f925c27cba6c5b290d43dff9b46befb7ff478e85b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
