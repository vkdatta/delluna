export const name="circle_notifications";
export const id="dl_d6ea2de374cb36e0f5d0";
export const url=new URL("../icons/circle_notifications.svg?v=b13bcf9053ee05ac81a04d6914fdda66c79c614982feb3b7c9e8556fe778e5c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
