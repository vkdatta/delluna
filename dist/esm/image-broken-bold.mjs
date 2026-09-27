export const name="image-broken-bold";
export const id="dl_397fbde81ebf4f848a00";
export const url=new URL("../icons/image-broken-bold.svg?v=fced73fa215bcff5b81fa354ed95dbe9840bfaa84d338440d239305be1a94f69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
