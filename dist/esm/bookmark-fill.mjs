export const name="bookmark-fill";
export const id="dl_af02f93864cc4f17bb46";
export const url=new URL("../icons/bookmark-fill.svg?v=102c087cfaaac757c9e4a8c97662cae7bb677cf77e7f457feac49e5daafc42e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
