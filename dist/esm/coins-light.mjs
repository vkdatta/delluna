export const name="coins-light";
export const id="dl_7f61df66208d45c0b6f6";
export const url=new URL("../icons/coins-light.svg?v=c3083a8f3f270142cf321005e84b2cc723cc1a2eaab4d02f3305faed0cf08b07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
