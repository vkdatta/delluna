export const name="japanese_flag-fill";
export const id="dl_03c3f0f5173a27439e37";
export const url=new URL("../icons/japanese_flag-fill.svg?v=20dbd03e5654cea8b8278d58bc283174a49e2081134e58383680f5353daf8f0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
