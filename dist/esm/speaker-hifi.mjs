export const name="speaker-hifi";
export const id="dl_fd4e2cc818366033b8dc";
export const url=new URL("../icons/speaker-hifi.svg?v=efd830cdae919b57b450c1a1ea581ab3e609a0a2cd16a3db5ca5b1b5f3156147",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
