export const name="license";
export const id="dl_ce64441c865711740c8e";
export const url=new URL("../icons/license.svg?v=8ffd1581106b85f1c834c4a2ffbd74ca11aa05430e554d6cdbaf5ec8b36ec5ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
