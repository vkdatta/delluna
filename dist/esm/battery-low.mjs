export const name="battery-low";
export const id="dl_cb1df4eda96f4ac4b549";
export const url=new URL("../icons/battery-low.svg?v=fca68e86c2d2501be6ae6b222e5a92813d1bb43a58b274f0e0f0804878dee14b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
