export const name="speaker-simple-slash-light";
export const id="dl_5ab7876a16f694d7d35c";
export const url=new URL("../icons/speaker-simple-slash-light.svg?v=98ef8c4a0a4abe4a4afdfe836162d3a8937b3986454f0b3693060f3adfb5044f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
