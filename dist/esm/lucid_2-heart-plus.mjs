export const name="lucid_2-heart-plus";
export const id="dl_4beff44932b045a9ba30";
export const url=new URL("../icons/lucid_2-heart-plus.svg?v=1bf157ff670724bc814ad9bebdb9d45355ae2d4389504b58aedbf0c7d1ee8e29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
