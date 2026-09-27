export const name="tv_off-fill";
export const id="dl_6f0f8a044397b29650a2";
export const url=new URL("../icons/tv_off-fill.svg?v=536a750f9bd811146ab36f6ae1a8e071b8afe59f97699ac7504c4b3329f92ed3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
