export const name="calendar-fill";
export const id="dl_77bd2f1c7d2d48bf8634";
export const url=new URL("../icons/calendar-fill.svg?v=7af4ccc2d77c346ff391ed6071fb3dedf34854dcc3da7ac76462f0a729e81114",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
