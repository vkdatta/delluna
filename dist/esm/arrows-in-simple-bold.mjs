export const name="arrows-in-simple-bold";
export const id="dl_64b27238e89740b9bb70";
export const url=new URL("../icons/arrows-in-simple-bold.svg?v=c4b9e916c9a13180893b89d09b5cc49da96851d0047bb968306bb528bc3c4a93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
