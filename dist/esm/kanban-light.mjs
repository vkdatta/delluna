export const name="kanban-light";
export const id="dl_00a09b9dd60a4c5db533";
export const url=new URL("../icons/kanban-light.svg?v=eeb4b4f668d90c1500f255fd0db12adb018d5e51a7fae8a790cd73d681ed969b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
