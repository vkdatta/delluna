export const name="emoji_people-fill";
export const id="dl_597350605ded5985a3c4";
export const url=new URL("../icons/emoji_people-fill.svg?v=27af31a1b9372de16db9e37163603cf3e95ab44e680469dbe13804ddab77aca9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
