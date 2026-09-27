export const name="seatbelt-thin";
export const id="dl_d13aea5d96f3d6a95b3b";
export const url=new URL("../icons/seatbelt-thin.svg?v=7ffe034af0532c81a621b8ec76205367533940a302594caeae6af52c1f9a2fb1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
