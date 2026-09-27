export const name="voicemail-fill";
export const id="dl_e81adb39d79a06e2a2a5";
export const url=new URL("../icons/voicemail-fill.svg?v=1836fca5ba5dc32b51e0310a17bb3be38c424c4e39106b008a565df4e7d3528b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
