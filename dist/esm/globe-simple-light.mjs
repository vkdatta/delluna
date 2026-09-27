export const name="globe-simple-light";
export const id="dl_24ce6152a5a24ee7b313";
export const url=new URL("../icons/globe-simple-light.svg?v=af7a255ad62c87c553ba35de1d31ad57b45e22e5ed21c3b0c338af6a3138975d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
