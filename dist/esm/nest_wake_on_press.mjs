export const name="nest_wake_on_press";
export const id="dl_179de120c74a48f7b883";
export const url=new URL("../icons/nest_wake_on_press.svg?v=c231615ae395518fade050d41d5629da4e0b709c9380978bebf6a15602665f3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
