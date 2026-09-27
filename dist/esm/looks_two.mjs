export const name="looks_two";
export const id="dl_9dab3eb9b44e4dd3f8e9";
export const url=new URL("../icons/looks_two.svg?v=c2096deb1053ab8304ac537202e196ce0f7946789e468ebbcb5cc4dda7d08327",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
