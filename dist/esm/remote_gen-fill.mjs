export const name="remote_gen-fill";
export const id="dl_9f71c6f22b504e0097e9";
export const url=new URL("../icons/remote_gen-fill.svg?v=7cadae0a782710623c826d280e844381cba783967f8241478c57ea69cc4cf77a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
