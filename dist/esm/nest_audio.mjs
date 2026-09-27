export const name="nest_audio";
export const id="dl_14847e88c1e8056c5751";
export const url=new URL("../icons/nest_audio.svg?v=9e01c2ba593148bc2d1d100a5bf92296d8cf59604428b6a14a42ecbcfc8e19f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
