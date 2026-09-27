export const name="next_week-fill";
export const id="dl_39a4b470a1bba4c289ba";
export const url=new URL("../icons/next_week-fill.svg?v=1949f6de9000166c176072174807b0d041d7511cdea9fa449e64310f41a980df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
