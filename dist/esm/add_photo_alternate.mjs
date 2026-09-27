export const name="add_photo_alternate";
export const id="dl_a261300ddbfb1efcdbb9";
export const url=new URL("../icons/add_photo_alternate.svg?v=d609ef75e552006f1c24f2c8c452d62d6f7b328684a2f7a674ad7bfcdcd829d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
