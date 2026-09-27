export const name="album";
export const id="dl_7670cf35e8c0b8571e26";
export const url=new URL("../icons/album.svg?v=9d89d13d9645c3521da54ae16ede096952eb50f2d9a96a439d94b96e12c531a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
