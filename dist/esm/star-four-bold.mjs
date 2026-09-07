export const name="star-four-bold";
export const id="dl_9c33c0a5cabc4f0b9ac9";
export const url=new URL("../icons/S/star-four-bold.svg?v=645a0970184acc2c6c1ba004f8dddfbae004f1a1d6def4fc19d1dc2f4942bac9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
