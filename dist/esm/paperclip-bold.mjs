export const name="paperclip-bold";
export const id="dl_bcba6a72eb7a4598a944";
export const url=new URL("../icons/paperclip-bold.svg?v=9567acf7fb6c271d148a337003f6d1290841aa9af9e9cba7e103209d9be00586",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
