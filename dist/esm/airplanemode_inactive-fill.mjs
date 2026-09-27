export const name="airplanemode_inactive-fill";
export const id="dl_784afe4571100149d1cb";
export const url=new URL("../icons/airplanemode_inactive-fill.svg?v=e8695bc15b26217a3e7f17788cce48f386d4e3cbbb4d426aa5fbee37556af1b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
