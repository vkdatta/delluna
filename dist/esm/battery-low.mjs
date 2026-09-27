export const name="battery-low";
export const id="dl_cb1df4eda96f4ac4b549";
export const url=new URL("../icons/battery-low.svg?v=2ebbe385525bc2a25cc736b2ef7c2bb7788c6919bd59df502af1598760a1f16f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
