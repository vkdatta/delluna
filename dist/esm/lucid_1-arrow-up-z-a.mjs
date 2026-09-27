export const name="lucid_1-arrow-up-z-a";
export const id="dl_37ce1c38dab34613bb11";
export const url=new URL("../icons/lucid_1-arrow-up-z-a.svg?v=e54b5bac70504381da689c465b918f87dc2b29a986996897c3a2c4fb945919ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
