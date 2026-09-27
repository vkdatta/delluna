export const name="contact_emergency";
export const id="dl_4b6713d53b242a1657ce";
export const url=new URL("../icons/contact_emergency.svg?v=7f93910ee486901ee8bf3490d8cc45afdef6f079259b73dd63f4f4ed303eb09b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
