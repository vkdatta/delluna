export const name="calendar_today-fill";
export const id="dl_070f1e1bd62658b58503";
export const url=new URL("../icons/calendar_today-fill.svg?v=720a1081c59abeefbbd6951a79812440e561cbf212d5eff4a4e0d452c08f5c5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
