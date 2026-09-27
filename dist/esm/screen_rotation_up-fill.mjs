export const name="screen_rotation_up-fill";
export const id="dl_3cd45582a30dad67b96e";
export const url=new URL("../icons/screen_rotation_up-fill.svg?v=a000d9c191b6eda7b4cbb8f57da4404a9c5e64d06271c3dc5a405d172e917b53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
