export const name="assignment_late-fill";
export const id="dl_ba8897af4b909443435b";
export const url=new URL("../icons/assignment_late-fill.svg?v=471b878c01521dd98336f3253fd924b923c546b7244b86d90d7eafb846b59c9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
