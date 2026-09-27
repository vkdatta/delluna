export const name="fullscreen_portrait";
export const id="dl_c8209dbf6841f604752a";
export const url=new URL("../icons/fullscreen_portrait.svg?v=1da77630bc6e7ea5ed37528c30e11a77a6f1305c1ad1dc77080a12de537d4c8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
