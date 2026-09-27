export const name="align-top-simple-bold";
export const id="dl_007668d6eedb4552af9c";
export const url=new URL("../icons/align-top-simple-bold.svg?v=6181bb204e29d0b31a72e4820430046413fd864edb21035675fa5fdebbcff2c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
