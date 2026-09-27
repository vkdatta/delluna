export const name="emoji_objects-fill";
export const id="dl_8a8cc41508b512a929b7";
export const url=new URL("../icons/emoji_objects-fill.svg?v=5854e2dafcc4956fd539fa342b9b2bad7db76d2801771f7953445c60c0ed47c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
