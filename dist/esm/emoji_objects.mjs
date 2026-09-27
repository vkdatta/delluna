export const name="emoji_objects";
export const id="dl_5510ec80f2fe2437a58e";
export const url=new URL("../icons/emoji_objects.svg?v=a5dd7723bbd730768ad199c89c858084c25939d8a43db053ce0c3687712865a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
