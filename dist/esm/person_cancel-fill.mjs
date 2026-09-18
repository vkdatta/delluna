export const name="person_cancel-fill";
export const id="dl_88221c61b4434bb5b4d9";
export const url=new URL("../icons/person_cancel-fill.svg?v=3316c5cd1357297f4fa7a795d232c626431f9ee29037241bff05d1dc345f1513",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
