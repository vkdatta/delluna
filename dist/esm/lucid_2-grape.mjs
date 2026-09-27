export const name="lucid_2-grape";
export const id="dl_2905e7d009344883b005";
export const url=new URL("../icons/lucid_2-grape.svg?v=fdffa8e28d8456911a25e8c7b62f1805751ab192fd6997bef7c34caa1af6979d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
