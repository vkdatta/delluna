export const name="history_edu-fill";
export const id="dl_75cf421afe5fb70b9c17";
export const url=new URL("../icons/history_edu-fill.svg?v=3cf16413799edc1977d21019e3553bc2c5f8cfb8c3446575a1367d67cc28ccc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
