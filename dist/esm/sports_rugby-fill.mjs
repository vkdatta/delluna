export const name="sports_rugby-fill";
export const id="dl_a33f89c63d0d388c67ad";
export const url=new URL("../icons/sports_rugby-fill.svg?v=e367e3f9bd00be4c1e959e069d36ed6652b04b15b8d5fa8452c46a523e3593b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
