export const name="lucid_3-sofa";
export const id="dl_f769c9383d834587ae7f";
export const url=new URL("../icons/lucid_3-sofa.svg?v=8bde54e104cd26360a007b3df8334dd39c506d96af8c2e8d06bef9d17d6ccf3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
