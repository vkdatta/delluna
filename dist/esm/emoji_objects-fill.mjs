export const name="emoji_objects-fill";
export const id="dl_055bfad5332f4fb72888";
export const url=new URL("../icons/emoji_objects-fill.svg?v=a2392adf1f6a159725be4b742df32b80b1e15375744c3695800612732f9a8ad9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
