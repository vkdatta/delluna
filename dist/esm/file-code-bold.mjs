export const name="file-code-bold";
export const id="dl_b6e699df6a094c8f953c";
export const url=new URL("../icons/file-code-bold.svg?v=edf9a7b5d25a89839d95ba53d9e71c5a9074e70318108486bd439ac963b6f152",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
