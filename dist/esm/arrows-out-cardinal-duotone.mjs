export const name="arrows-out-cardinal-duotone";
export const id="dl_0c0c1c10da9b483181b9";
export const url=new URL("../icons/arrows-out-cardinal-duotone.svg?v=1a520b675b5d1e4d0e15b83148ad33bf0dcc6411dd55e1e4125d2981a4ed9341",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
