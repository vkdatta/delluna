export const name="fitness_trackers";
export const id="dl_d5eb9537d01937aad35c";
export const url=new URL("../icons/fitness_trackers.svg?v=6d0e6bf7677c14092eddbe581813968c8d3054fce3e341d0c1d42155d6706ea1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
