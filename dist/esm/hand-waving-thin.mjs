export const name="hand-waving-thin";
export const id="dl_06573ce3c084467385ad";
export const url=new URL("../icons/hand-waving-thin.svg?v=5dffd032e469f4323dd577ebe9e90a2443eb6c2eb072e4ecb6d0da840aa2ac60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
