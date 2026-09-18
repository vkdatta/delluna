export const name="youtube_searched_for-fill";
export const id="dl_fc393e53ce344ebcb55a";
export const url=new URL("../icons/Y/youtube_searched_for-fill.svg?v=25568f924fdb5e437e972f75a103d79159a8946e965ad0a5d4bc795a53ed52ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
