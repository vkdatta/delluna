export const name="shuffle-angular-light";
export const id="dl_640101ac29e743abb704";
export const url=new URL("../icons/S/shuffle-angular-light.svg?v=c4103ed4056d36432d3db9fc4691b3c480becc3acff3a56418115f44a521db55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
