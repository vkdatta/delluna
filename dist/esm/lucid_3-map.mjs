export const name="lucid_3-map";
export const id="dl_630b8e5b1dd14d678e9c";
export const url=new URL("../icons/lucid_3-map.svg?v=fd55c52172f1d1e0ee1279f637d5d99f8d37134fa56bc32efa8627dac3a7def1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
