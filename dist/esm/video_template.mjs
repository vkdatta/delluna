export const name="video_template";
export const id="dl_82b53ffca90d42829317";
export const url=new URL("../icons/video_template.svg?v=ae9f3b5ca1543978b6dc2964071584f4bc0ddef4ce27cd836eba4df2158e9711",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
