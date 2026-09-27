export const name="screencast-light";
export const id="dl_8ebcd686fd667d3c3129";
export const url=new URL("../icons/screencast-light.svg?v=1c93dbf70ba33679324a68f33e0ac9694444818c38e45dca048ccbbdf9d9092f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
