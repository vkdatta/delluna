export const name="emoji_nature";
export const id="dl_c1e62984effce3288e72";
export const url=new URL("../icons/emoji_nature.svg?v=0affcbac559ad760b9189ead5098b48c2e53de0cbea955f4d42091e398b82ef4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
