export const name="arrow_back_ios_new-fill";
export const id="dl_61498f30f8c21925eeaf";
export const url=new URL("../icons/arrow_back_ios_new-fill.svg?v=5ed7af4bc8a5ecb1a9988ce1f9a964385ea55bb4e55f7e65138ece6d939e5187",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
