export const name="trend-down-fill";
export const id="dl_d732ac4ec23b7425720c";
export const url=new URL("../icons/trend-down-fill.svg?v=49c6f8793755f65f446bd6185fdaa9599075910d7c7a34ef2dd680362ede1703",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
