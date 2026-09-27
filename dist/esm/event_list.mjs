export const name="event_list";
export const id="dl_46efccdd536dddedd083";
export const url=new URL("../icons/event_list.svg?v=2ae678526ad71b165205022cb636d56755363f97276366bfd2dcf96da234fe7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
