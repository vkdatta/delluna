export const name="missed_video_call-fill";
export const id="dl_3fefd75d05fc45328801";
export const url=new URL("../icons/missed_video_call-fill.svg?v=11de6953080eff96a3989ead79a17b20f929bec5ef68c207757fd5535e8ece7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
