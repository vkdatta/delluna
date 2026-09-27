export const name="subtitles_off";
export const id="dl_c15105778691cb337310";
export const url=new URL("../icons/subtitles_off.svg?v=60718c76cc9e282efb4a894b50adac6b3d1cef5f66458824b3b275f66ac24160",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
