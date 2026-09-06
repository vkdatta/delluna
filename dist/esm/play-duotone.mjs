export const name="play-duotone";
export const id="dl_83fe6808ff3b46288dfd";
export const url=new URL("../icons/play-duotone.svg?v=8485ad1efd20878370885ccf7b825aae21a3b2fede35734484475672ac707c48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
