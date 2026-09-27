export const name="lucid_1-church";
export const id="dl_381b0097a4234eadb0a5";
export const url=new URL("../icons/lucid_1-church.svg?v=cfd055110eb637c6475e0f3d8341ca769205e7b9c7dbd68de17c6c9f86833188",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
