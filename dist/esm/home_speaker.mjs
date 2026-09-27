export const name="home_speaker";
export const id="dl_a740ebc09b620917f155";
export const url=new URL("../icons/home_speaker.svg?v=ecbcabdd41093fd0f1ddb4e6e8953cf1f727e1636ca4d72666ed4aa5a2ad79e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
