export const name="video-camera-slash-bold";
export const id="dl_f2ffdcbda6194cc68439";
export const url=new URL("../icons/V/video-camera-slash-bold.svg?v=01121a8380ed14b351b87eaa3bb3b0d9271afbfb08c2261b7194258e812d629b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
