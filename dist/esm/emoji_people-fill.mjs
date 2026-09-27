export const name="emoji_people-fill";
export const id="dl_98349cffe265834549ca";
export const url=new URL("../icons/emoji_people-fill.svg?v=f26727722c8e34d19dc9ad396815678a1fdc82d753fe789b8846ca01cad77ba2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
