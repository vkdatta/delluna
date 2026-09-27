export const name="lucid_2-lamp-wall-up";
export const id="dl_0b2a0c555f15485c9a0d";
export const url=new URL("../icons/lucid_2-lamp-wall-up.svg?v=8726507b03d2a41f21e4ce87403a695171c9970a74dedf2c2d3ba97e0796856f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
