export const name="play-circle-fill";
export const id="dl_c3a06485245f4cbb9aee";
export const url=new URL("../icons/play-circle-fill.svg?v=88afcf96a9fd2839af12531552683dd19392ac626a57cb388733d125d6dd4075",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
