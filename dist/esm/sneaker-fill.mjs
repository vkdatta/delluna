export const name="sneaker-fill";
export const id="dl_52149861d14a6108d052";
export const url=new URL("../icons/sneaker-fill.svg?v=623461b390f7c6cd1a22709d1e76aaebc159994cdff2ed13afe30596c0909a74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
