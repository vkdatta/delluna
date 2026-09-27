export const name="speaker-simple-low-thin";
export const id="dl_502b03166ad4beb4ff32";
export const url=new URL("../icons/speaker-simple-low-thin.svg?v=3d6e3f48e515bc5063f9a72e8496aea7b36ac963353775d430fa44683f1a266f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
