export const name="sound_detection_dog_barking-fill";
export const id="dl_8981315f1dec8a8790ac";
export const url=new URL("../icons/sound_detection_dog_barking-fill.svg?v=13d09f0cfa693ca0250b0cbbf0d138d6d3576185c4845aad84abaa17b4df1cbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
