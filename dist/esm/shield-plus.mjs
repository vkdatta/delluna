export const name="shield-plus";
export const id="dl_4c083e38e17eb70b5de6";
export const url=new URL("../icons/shield-plus.svg?v=eb6a9c3f6da8d57ef20b8ad49f36e273726b807a7c69158f0ed869bd827b81f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
