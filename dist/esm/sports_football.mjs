export const name="sports_football";
export const id="dl_9ab254667118490e8108";
export const url=new URL("../icons/S/sports_football.svg?v=6c7cabc38fec7353e5a0d8395ab5313b7936e5e3263a194370464129f8b5899e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
