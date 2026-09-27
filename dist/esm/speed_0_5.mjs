export const name="speed_0_5";
export const id="dl_4dafe3228de2769b1c97";
export const url=new URL("../icons/speed_0_5.svg?v=38f7bd9c18cea42c4667f0731412ea566cffd633f07a405da53f4b8a8fb4ae4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
