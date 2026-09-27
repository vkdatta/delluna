export const name="tire-thin";
export const id="dl_9bfbbce250b410004833";
export const url=new URL("../icons/tire-thin.svg?v=f31d935c7786f92dc9e12a37f5af046c985499842dedabb4615bca810a22937d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
