export const name="speaker-simple-slash-light";
export const id="dl_2602f061b62148c39c70";
export const url=new URL("../icons/S/speaker-simple-slash-light.svg?v=9393e9df6645a9faf5fad1180258ae4615bfb484478d3caa7b18153aa66b615c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
