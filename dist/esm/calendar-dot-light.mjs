export const name="calendar-dot-light";
export const id="dl_a37c0dade90e43eda6e8";
export const url=new URL("../icons/calendar-dot-light.svg?v=4cfb8b15c1e93fef4eea66c454dc36f86249e66e447e02ca97deb82ae363b228",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
