export const name="lucid_1-car";
export const id="dl_86a311e777034361bd5b";
export const url=new URL("../icons/lucid_1-car.svg?v=0b9b80c40e71800c742243664908fb0c03a4c1e32085320a8a6e8321713563b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
