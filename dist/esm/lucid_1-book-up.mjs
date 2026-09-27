export const name="lucid_1-book-up";
export const id="dl_857bf47578634108b7a3";
export const url=new URL("../icons/lucid_1-book-up.svg?v=44e55b9e383316f49d9527d20c436af3f56a918974e4f00e103da79e6769c2ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
