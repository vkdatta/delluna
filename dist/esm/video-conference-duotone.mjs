export const name="video-conference-duotone";
export const id="dl_81997b5bd12f423793b1";
export const url=new URL("../icons/V/video-conference-duotone.svg?v=6add24bd0336234d2526bec2d0962cbb8c0ebd81c6933c83c4a7fafef9d442ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
