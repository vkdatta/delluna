export const name="nest_display_max";
export const id="dl_7c36fcca420cf015252e";
export const url=new URL("../icons/nest_display_max.svg?v=cf06043258989edde1acec2694b693d9cd63964a6d03ca5700035d8366afe3f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
