export const name="emoji_nature-fill";
export const id="dl_4ecaa46128b54e52bc78";
export const url=new URL("../icons/E/emoji_nature-fill.svg?v=186c874a103088d72e4c8a589bd210e4a74a5a9d31cd739134c0274bcdacfe15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
