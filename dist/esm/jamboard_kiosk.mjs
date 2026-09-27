export const name="jamboard_kiosk";
export const id="dl_71fc3974ef54d987fdee";
export const url=new URL("../icons/jamboard_kiosk.svg?v=440adaa73534500a646797755a19dbf0c890a8b4ec60d703ba88da004e439578",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
