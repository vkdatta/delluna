export const name="thumbs-up-light";
export const id="dl_db3daea4f52fa3f08adc";
export const url=new URL("../icons/thumbs-up-light.svg?v=e7c2c549d96789fbde4bee3b6e0760483badc98d229a5148208e0b365265b6e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
