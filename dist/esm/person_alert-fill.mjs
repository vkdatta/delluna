export const name="person_alert-fill";
export const id="dl_66b01cfb6348ce1215b2";
export const url=new URL("../icons/person_alert-fill.svg?v=5530689f5b7ed3fd008b4e0c50a84bf85e61ad0b7e2f9d14ac790fb98705224a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
