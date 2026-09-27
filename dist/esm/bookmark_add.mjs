export const name="bookmark_add";
export const id="dl_87b084203bed5eceb54b";
export const url=new URL("../icons/bookmark_add.svg?v=df6e3bde2d8e7863d51651bcbe75ddf82ceaa8e28d75caf80fc4e1125e5b393a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
