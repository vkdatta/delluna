export const name="golf_course-fill";
export const id="dl_fd9c01e0cfc2ed344e09";
export const url=new URL("../icons/golf_course-fill.svg?v=b3c6112a10ec0a1f2103104f2efc782d53ebde9cc41144ab45d22f805f29f7bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
