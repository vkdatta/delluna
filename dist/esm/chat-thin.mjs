export const name="chat-thin";
export const id="dl_60e6b06de8eb45bda498";
export const url=new URL("../icons/chat-thin.svg?v=2224e4b78aa5fd178e62069d5758b722c5674d9e72781891de711dfe77281571",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
