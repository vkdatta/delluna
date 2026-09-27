export const name="bookmark-fill";
export const id="dl_af02f93864cc4f17bb46";
export const url=new URL("../icons/bookmark-fill.svg?v=e49da330e416abc5d329d39b8357d45ae736c6151ac8a253061d0d0893834cb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
