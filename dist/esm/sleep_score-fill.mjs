export const name="sleep_score-fill";
export const id="dl_45f8c8406ba44723abca";
export const url=new URL("../icons/sleep_score-fill.svg?v=f972fc3bcdd511ee7b5eab3ef22a8c01591b4e43da99ec7b94879d77a2e7c51b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
