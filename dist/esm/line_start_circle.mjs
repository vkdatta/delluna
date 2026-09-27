export const name="line_start_circle";
export const id="dl_9e43af3bef4779f5776c";
export const url=new URL("../icons/line_start_circle.svg?v=3db86e029439444dca868350da33e012f6bb41ad181e1ea71c65fe126ebea344",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
