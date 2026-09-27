export const name="arrow-u-right-up-light";
export const id="dl_791b587d6e7642a481a1";
export const url=new URL("../icons/arrow-u-right-up-light.svg?v=c0657c9da41997bc8e2ce7bacf977d99f9e0bd9290e8850682b44495c70ab24e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
