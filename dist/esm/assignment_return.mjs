export const name="assignment_return";
export const id="dl_fdfd463373290fd346ea";
export const url=new URL("../icons/assignment_return.svg?v=01ef68424d03383b687b059ea0813966812cc763bf91fdbabe911ef127550feb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
