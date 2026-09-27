export const name="arrow-circle-up-right-light";
export const id="dl_7d0b946d336b4ee0a8ea";
export const url=new URL("../icons/arrow-circle-up-right-light.svg?v=6715ef49dd2d7e24ff1808b65f0c61d1f89adcb6cb7fd451b07638e617673eee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
