export const name="crop_16_9";
export const id="dl_59edd5629b66d93ee1f6";
export const url=new URL("../icons/crop_16_9.svg?v=d9511076c5b4907d669b0c5b8af130c8715a2cc5098f5480d1d43463aef088d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
