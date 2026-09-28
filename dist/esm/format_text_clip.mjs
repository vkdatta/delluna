export const name="format_text_clip";
export const id="dl_22c92e82411dd1542a6b";
export const url=new URL("../icons/format_text_clip.svg?v=c19e7b8fe735ab184e98a306644dc57c58f98422424e6a0d3b0a08c31c96fcee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
