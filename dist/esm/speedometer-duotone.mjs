export const name="speedometer-duotone";
export const id="dl_98fd3176dec8225ee48e";
export const url=new URL("../icons/speedometer-duotone.svg?v=ab5f841999c41f6678f3788a9ffb6af26b0360d1b1c4afa698d20afea4b0e9be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
