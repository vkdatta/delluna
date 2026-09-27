export const name="calendar-check-light";
export const id="dl_cc96e63847e04f2eac4b";
export const url=new URL("../icons/calendar-check-light.svg?v=21c7a76f42549b1e3a69b917f13b7f1bc3f52bc14db75a045ab34403ea091242",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
