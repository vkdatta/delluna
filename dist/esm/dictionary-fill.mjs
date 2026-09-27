export const name="dictionary-fill";
export const id="dl_469baf15e60f0dd2c3bf";
export const url=new URL("../icons/dictionary-fill.svg?v=254c08b3e558a5188cd7fdc9b6cc0b5af3922e808722a94e7aeb832ce5cf3358",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
