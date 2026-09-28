export const name="speaker-simple-x-duotone";
export const id="dl_9fbc8f41efe83824a506";
export const url=new URL("../icons/speaker-simple-x-duotone.svg?v=81aa1166efb0c81790d11f2b332addbfffa0e8e348ea5883aa7a0edde1212ae1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
