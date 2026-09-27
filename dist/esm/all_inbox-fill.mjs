export const name="all_inbox-fill";
export const id="dl_1f3727ed204874762636";
export const url=new URL("../icons/all_inbox-fill.svg?v=ae5aaf99dabfd9fa0db24dc16dbadced20a5121804d6f642786d1099cc7264b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
