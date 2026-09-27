export const name="video-thin";
export const id="dl_bc8724cde0159c9d6162";
export const url=new URL("../icons/video-thin.svg?v=47403e51101fb76cd17cdcd7134fca97efb54d94372e9094f4e9238c541c7809",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
