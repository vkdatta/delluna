export const name="replace_audio-fill";
export const id="dl_be8e94e3ada746b2eec4";
export const url=new URL("../icons/replace_audio-fill.svg?v=aeb4d5ca08c9e4e27c289a54c7fe20151eabfe7737653686c3f17380183115a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
