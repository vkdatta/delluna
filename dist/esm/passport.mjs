export const name="passport";
export const id="dl_bb18704707ea439f8958";
export const url=new URL("../icons/passport.svg?v=f4847f7b24740d28d0478297eb0ce855c85ce85424199b29d7b63d69386a529a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
