export const name="south_west";
export const id="dl_a316cba9a631bfb19ea0";
export const url=new URL("../icons/south_west.svg?v=83b36a0e1abbb725df11b354170ce653c68c44fde310a7e7ddcbb2012a3fd442",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
