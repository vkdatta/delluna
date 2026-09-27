export const name="hard_drive_2-fill";
export const id="dl_c0eaac730a60bdf72420";
export const url=new URL("../icons/hard_drive_2-fill.svg?v=7e6679762581634267cb9f233565e97b14fafaf600e8e8e804a71efe64887dca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
