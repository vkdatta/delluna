export const name="emoji_transportation";
export const id="dl_2440a7c385e5d4e8c859";
export const url=new URL("../icons/emoji_transportation.svg?v=23224426a95a9da86578ee66e74686d9a462f36ca8f403f747df8ab5e868483e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
