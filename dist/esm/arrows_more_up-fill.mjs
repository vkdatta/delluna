export const name="arrows_more_up-fill";
export const id="dl_ad55e83709454a06913b";
export const url=new URL("../icons/A/arrows_more_up-fill.svg?v=7808d4891c4525458f278cf045a825a32a9fe49d4076383ebd02b911038bcb56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
