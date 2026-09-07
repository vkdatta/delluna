export const name="speaker-simple-x-bold";
export const id="dl_a26570bc2c7640de8a2a";
export const url=new URL("../icons/S/speaker-simple-x-bold.svg?v=22d29e1412f68edcb079dbfd653e49d51132c7c92a45f1490088dfe1b3ed8df2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
