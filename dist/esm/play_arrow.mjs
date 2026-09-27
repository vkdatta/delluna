export const name="play_arrow";
export const id="dl_6a1301b21605d9e20fff";
export const url=new URL("../icons/play_arrow.svg?v=1beeea9fd18ac25a092a5015fc1bae3b38d51cbcb4cd08a347bf9e1fcecf5a25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
