export const name="cell-signal-low-light";
export const id="dl_0d2d426785c04f85b438";
export const url=new URL("../icons/cell-signal-low-light.svg?v=17cdbb22d8975c5de20cc839c218771679c3ed4f280ef7a31ad474573351b783",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
