export const name="youtube-logo-light";
export const id="dl_23bb400e1591744623bc";
export const url=new URL("../icons/youtube-logo-light.svg?v=f22dc74fa8c37328c8eb29d4844c17b7c92979c3567af9663d293bb7a728c0d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
