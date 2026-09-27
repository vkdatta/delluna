export const name="arrow-elbow-right";
export const id="dl_3156363b922e4bc188a3";
export const url=new URL("../icons/arrow-elbow-right.svg?v=b798d37ce045e0773e3efda361259f3fe2480dbe2838e9b0ab641917d506c87a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
