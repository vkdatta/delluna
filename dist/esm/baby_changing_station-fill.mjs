export const name="baby_changing_station-fill";
export const id="dl_dede76ad37294a43830d";
export const url=new URL("../icons/B/baby_changing_station-fill.svg?v=818f5022137c40f6fee01770d6f5f927269a1a16da0d9f94c508e28d2ce16347",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
