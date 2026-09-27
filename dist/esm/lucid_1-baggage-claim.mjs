export const name="lucid_1-baggage-claim";
export const id="dl_25f4ae3598cb4ee2948d";
export const url=new URL("../icons/lucid_1-baggage-claim.svg?v=7fd2ddff1639a8be65bdde2c803890c40082dec335edba01837b1cbc53ae50d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
