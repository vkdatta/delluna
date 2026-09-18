export const name="golf_course-fill";
export const id="dl_82fc50b9c99747a396f8";
export const url=new URL("../icons/golf_course-fill.svg?v=50c59f253e94ab162163537f48d475ca199cb682c4e5e7c1f8d057e1811f28bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
