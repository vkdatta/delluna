export const name="plus-minus-bold";
export const id="dl_034fc2afa0eb49448413";
export const url=new URL("../icons/plus-minus-bold.svg?v=9c07b1d886c5b4558cf4ab4746732ad4c9bac17d50da3f69b792040c343ed5e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
