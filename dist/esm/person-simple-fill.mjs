export const name="person-simple-fill";
export const id="dl_072851fb8c984bac909a";
export const url=new URL("../icons/person-simple-fill.svg?v=962dfa1ff281131d9002aa12c579d846c3349e9d29c4bd13c8ee0ab0520b3081",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
