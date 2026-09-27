export const name="front_hand";
export const id="dl_86acd6d6f1ec62e3e06c";
export const url=new URL("../icons/front_hand.svg?v=6ddd489e8c0d03f68e60ec7818a6f35160c8f4f0e4b0bc6f631691ae2fdd2fb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
