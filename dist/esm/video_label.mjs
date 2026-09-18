export const name="video_label";
export const id="dl_f5de3f5cbee84d24ac38";
export const url=new URL("../icons/video_label.svg?v=a7ed86d479e34491a70c6a682ad1164b8234834481c3e594aa2634a0a8d5fc4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
