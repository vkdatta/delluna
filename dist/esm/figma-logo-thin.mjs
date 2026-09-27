export const name="figma-logo-thin";
export const id="dl_17b63b8f696b4318a346";
export const url=new URL("../icons/figma-logo-thin.svg?v=c8448b2318ab3efd1616e081c092f2c3cc851630848921373a0969ff6a04ba9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
