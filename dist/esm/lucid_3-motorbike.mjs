export const name="lucid_3-motorbike";
export const id="dl_60b2b5d5ff0140aab54c";
export const url=new URL("../icons/lucid_3-motorbike.svg?v=b8b465e326daf190fae95ce27e8f56b029d0b8bde11191e97d1cb24202014341",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
