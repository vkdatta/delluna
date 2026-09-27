export const name="subtitles-slash-duotone";
export const id="dl_5d036eebfbbde4476070";
export const url=new URL("../icons/subtitles-slash-duotone.svg?v=217a5bb9ae833d65e0e630d2dc2ca9e026fbd90e4028a95d125d2e221dd95d23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
