export const name="motion_play-fill";
export const id="dl_38d72e71890940e6a326";
export const url=new URL("../icons/M/motion_play-fill.svg?v=b9e7d13bad7408beb50782addfe217f261293e76870307622938aaab4cd59331",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
