export const name="emoji_objects";
export const id="dl_0990bdc6064e7240d8ed";
export const url=new URL("../icons/emoji_objects.svg?v=f5e6b81c759b7f5f58a6cea8914c82078c35ddc9d7ac7ab0dfe186c142dcb250",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
