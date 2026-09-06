export const name="line-segment-bold";
export const id="dl_9aff12e9494c4c74b4c2";
export const url=new URL("../icons/line-segment-bold.svg?v=d42385d3eeccac9bb1b6848ad6ba7ec3bdaf3d65cb3b6f352d750411a8951ea4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
