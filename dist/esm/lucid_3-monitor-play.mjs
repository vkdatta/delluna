export const name="lucid_3-monitor-play";
export const id="dl_ec30c1005e9f44779631";
export const url=new URL("../icons/lucid_3-monitor-play.svg?v=10af386cfd440a74669eb8d70949476b0cae5cb20ef674c30115a8b67fad36ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
