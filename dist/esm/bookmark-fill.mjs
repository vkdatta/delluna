export const name="bookmark-fill";
export const id="dl_af02f93864cc4f17bb46";
export const url=new URL("../icons/bookmark-fill.svg?v=38496f0a6ac86dad2b814f40508e881f9f81dd842c8b4e9f13333eec63290861",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
