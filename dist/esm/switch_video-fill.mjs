export const name="switch_video-fill";
export const id="dl_fc2755f58ea4c22a6376";
export const url=new URL("../icons/switch_video-fill.svg?v=0ba5c437f398a0758ef6ffe7f348ae843ed369adac5a95e646c3a645cc6edcdb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
