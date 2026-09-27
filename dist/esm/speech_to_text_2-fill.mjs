export const name="speech_to_text_2-fill";
export const id="dl_772bc8995226279fc495";
export const url=new URL("../icons/speech_to_text_2-fill.svg?v=d71a693bc1f57f1134f04427c639def797f513eda191726ae0aa48365d746ff7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
