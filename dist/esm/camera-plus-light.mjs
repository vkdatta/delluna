export const name="camera-plus-light";
export const id="dl_eb643187cb6e4b6d90a8";
export const url=new URL("../icons/camera-plus-light.svg?v=c4b76bd76aa76fb400551be118e0d3c12560c89913b95c0db66ee66db26de79a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
