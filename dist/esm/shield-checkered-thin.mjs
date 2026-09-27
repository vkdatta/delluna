export const name="shield-checkered-thin";
export const id="dl_74caa76ba859d32863ca";
export const url=new URL("../icons/shield-checkered-thin.svg?v=8e2fb35eac7bd813811766531ecee7e72830ca67bb7a10201c20eb131b15ef75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
