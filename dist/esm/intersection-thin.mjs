export const name="intersection-thin";
export const id="dl_0628287b3b074209a441";
export const url=new URL("../icons/intersection-thin.svg?v=004636f32295529aca928034c1fd159f0cf48d6ab43130c9997a1c4c5d81f93d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
