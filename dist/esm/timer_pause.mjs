export const name="timer_pause";
export const id="dl_de6be250b503bceebf24";
export const url=new URL("../icons/timer_pause.svg?v=97fb1cf0801d413b227643e772b3c5eee1006bcb9e57686875b6beeaf702787b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
