export const name="crane-fill";
export const id="dl_9ca947349fc04c65a769";
export const url=new URL("../icons/crane-fill.svg?v=9a102d801abdc1bee10ec28337b56a26195cc7167b3ef800ee717c4a9351a0fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
