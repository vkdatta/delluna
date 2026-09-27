export const name="sketch-logo-fill";
export const id="dl_c99de89e9a07b412bc22";
export const url=new URL("../icons/sketch-logo-fill.svg?v=af9ee82597e9715f72a32d92372aacf505d4007013ca311d6d82059d1367d547",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
