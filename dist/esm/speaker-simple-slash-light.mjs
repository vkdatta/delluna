export const name="speaker-simple-slash-light";
export const id="dl_fda53af644ff70dfa3d8";
export const url=new URL("../icons/speaker-simple-slash-light.svg?v=74f53bb768a9fa0ee941c1dd2b4fe8aa76bbc064633822f53659cf45bb9fc07f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
