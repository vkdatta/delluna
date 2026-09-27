export const name="ear-slash-bold";
export const id="dl_bb2138afc0484928bb88";
export const url=new URL("../icons/ear-slash-bold.svg?v=b65d89ed1c2ef20ff1a9684e777011d44f2b063c85b72ab01aba006979d4c1c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
