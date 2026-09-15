export const name="camera_outdoor";
export const id="dl_16959f7d0639476e9961";
export const url=new URL("../icons/C/camera_outdoor.svg?v=c57c8d6a5b956675fb988052b9123ac11e6b5d3e17d53e0ca8c7c17858cb40b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
