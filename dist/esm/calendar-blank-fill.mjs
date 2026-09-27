export const name="calendar-blank-fill";
export const id="dl_9bca5a161f0f4ec08d21";
export const url=new URL("../icons/calendar-blank-fill.svg?v=a08772105aa238bd643b149526d702c110858332f97ed81e210a3170159469c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
