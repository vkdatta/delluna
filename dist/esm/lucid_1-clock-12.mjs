export const name="lucid_1-clock-12";
export const id="dl_259ef765944146eba3a8";
export const url=new URL("../icons/lucid_1-clock-12.svg?v=7da9eea5996fa142dc4929ab8004e1c6af96904211daf4f22387efb56926744f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
