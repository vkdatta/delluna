export const name="dots-three-circle-bold";
export const id="dl_0bb1d3a806a042d7a8d7";
export const url=new URL("../icons/dots-three-circle-bold.svg?v=37c8d82fe69e80f967cc41877c863b51092d38b1f2b0b7391ecafd0ac3aa5816",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
