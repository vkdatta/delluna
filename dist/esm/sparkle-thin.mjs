export const name="sparkle-thin";
export const id="dl_9c7cd841540345ff9dd5";
export const url=new URL("../icons/S/sparkle-thin.svg?v=75b887f7705963254d2a87dcca6b707cdf0ac1f3fd72c79cbbb30923ca04c793",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
