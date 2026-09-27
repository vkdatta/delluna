export const name="golf_course-fill";
export const id="dl_92885f5154665af874d0";
export const url=new URL("../icons/golf_course-fill.svg?v=e71dc689710836b9d6af2b887595a5f55c4712b46513cea1a75e72665d26b671",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
