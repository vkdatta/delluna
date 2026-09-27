export const name="mark_as_unread";
export const id="dl_e89e5b1ed8c09f316fd6";
export const url=new URL("../icons/mark_as_unread.svg?v=9d87531c897445f270655662cb80c5343400b9eb5eba45958ff9ba3a0943d393",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
