export const name="auto_stories";
export const id="dl_8b12bbfd8ead76cdf0cb";
export const url=new URL("../icons/auto_stories.svg?v=b073463bc9f69421166976dd0a39045ab3023655b1a14da19355003a7b906d18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
