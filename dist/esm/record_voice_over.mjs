export const name="record_voice_over";
export const id="dl_526df39c10e3a1effe73";
export const url=new URL("../icons/record_voice_over.svg?v=de6cf49024414b05c4e9e4ccd6c2d775d3a645650a8adafda32d8bbd70eeefbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
