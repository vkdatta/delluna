export const name="feather-thin";
export const id="dl_93400f00ff764e52b40f";
export const url=new URL("../icons/feather-thin.svg?v=51863d184bc6386cd61286b35d74ae509d990dcd293f787cb13e00eaa7915600",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
